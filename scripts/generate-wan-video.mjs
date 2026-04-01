import fs from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const value = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
    args[key] = value;
  }
  return args;
}

async function loadEnv() {
  const envPath = path.resolve(".env.local");
  const content = await fs.readFile(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const index = line.indexOf("=");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  await loadEnv();

  const args = parseArgs(process.argv.slice(2));
  const prompt = args.prompt;
  const output = args.output;

  if (!prompt || !output) {
    throw new Error("Usage: node scripts/generate-wan-video.mjs --prompt \"...\" --output public/generated/qwen/file.mp4 [--model wan2.2-t2v-plus]");
  }

  const apiKey = process.env.DASHSCOPE_API_KEY;
  const baseUrl = process.env.DASHSCOPE_BASE_URL ?? "https://dashscope-intl.aliyuncs.com";

  if (!apiKey) {
    throw new Error("DASHSCOPE_API_KEY is missing.");
  }

  const model = args.model ?? "wan2.2-t2v-plus";
  const size = args.size ?? "1280*720";
  const duration = Number(args.duration ?? 5);
  const negativePrompt =
    args.negative_prompt ??
    "low resolution, error, worst quality, low quality, deformed machine, extra wheels, malformed hydraulics, text, watermark, logo, cartoon look";

  const createResponse = await fetch(
    `${baseUrl}/api/v1/services/aigc/video-generation/video-synthesis`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "X-DashScope-Async": "enable",
      },
      body: JSON.stringify({
        model,
        input: {
          prompt,
        },
        parameters: {
          size,
          duration,
          negative_prompt: negativePrompt,
          prompt_extend: true,
          watermark: false,
        },
      }),
    }
  );

  if (!createResponse.ok) {
    const text = await createResponse.text();
    throw new Error(`Video task creation failed: ${createResponse.status} ${text}`);
  }

  const created = await createResponse.json();
  const taskId = created?.output?.task_id;

  if (!taskId) {
    throw new Error(`No task_id returned. Response: ${JSON.stringify(created)}`);
  }

  let videoUrl = null;

  for (let attempt = 0; attempt < 40; attempt += 1) {
    await sleep(15000);
    const pollResponse = await fetch(`${baseUrl}/api/v1/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!pollResponse.ok) {
      const text = await pollResponse.text();
      throw new Error(`Video polling failed: ${pollResponse.status} ${text}`);
    }

    const polled = await pollResponse.json();
    const status = polled?.output?.task_status;

    if (status === "SUCCEEDED") {
      videoUrl = polled?.output?.video_url;
      break;
    }

    if (status === "FAILED") {
      throw new Error(`Video generation failed: ${JSON.stringify(polled)}`);
    }
  }

  if (!videoUrl) {
    throw new Error("Video generation timed out before a video_url was returned.");
  }

  const videoResponse = await fetch(videoUrl);
  if (!videoResponse.ok) {
    throw new Error(`Failed to download video: ${videoResponse.status}`);
  }

  const buffer = Buffer.from(await videoResponse.arrayBuffer());
  await fs.mkdir(path.dirname(path.resolve(output)), { recursive: true });
  await fs.writeFile(path.resolve(output), buffer);

  console.log(`Saved video to ${output}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
