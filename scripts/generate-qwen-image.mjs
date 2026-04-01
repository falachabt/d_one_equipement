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

async function main() {
  await loadEnv();

  const args = parseArgs(process.argv.slice(2));
  const prompt = args.prompt;
  const output = args.output;

  if (!prompt || !output) {
    throw new Error("Usage: node scripts/generate-qwen-image.mjs --prompt \"...\" --output public/generated/qwen/file.png [--size 1536*1024] [--model qwen-image-2.0]");
  }

  const apiKey = process.env.DASHSCOPE_API_KEY;
  const baseUrl = process.env.DASHSCOPE_BASE_URL ?? "https://dashscope-intl.aliyuncs.com";

  if (!apiKey) {
    throw new Error("DASHSCOPE_API_KEY is missing.");
  }

  const model = args.model ?? "qwen-image-2.0";
  const size = args.size ?? "1536*1024";
  const promptExtend = args.prompt_extend === "false" ? false : true;
  const seed = args.seed ? Number(args.seed) : undefined;
  const negativePrompt =
    args.negative_prompt ??
    "Low resolution, low quality, distorted wheels, malformed bucket, extra limbs, deformed cabin, text, logos, watermark, AI artifacts, cartoon look.";

  const response = await fetch(
    `${baseUrl}/api/v1/services/aigc/multimodal-generation/generation`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        input: {
          messages: [
            {
              role: "user",
              content: [{ text: prompt }],
            },
          ],
        },
        parameters: {
          negative_prompt: negativePrompt,
          prompt_extend: promptExtend,
          watermark: false,
          size,
          ...(seed !== undefined ? { seed } : {}),
        },
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Image generation failed: ${response.status} ${text}`);
  }

  const json = await response.json();
  const imageUrl =
    json?.output?.choices?.[0]?.message?.content?.find?.((item) => item.image)?.image;

  if (!imageUrl) {
    throw new Error(`No image URL returned. Response: ${JSON.stringify(json)}`);
  }

  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    throw new Error(`Failed to download image: ${imageResponse.status}`);
  }

  const buffer = Buffer.from(await imageResponse.arrayBuffer());
  await fs.mkdir(path.dirname(path.resolve(output)), { recursive: true });
  await fs.writeFile(path.resolve(output), buffer);

  console.log(`Saved image to ${output}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
