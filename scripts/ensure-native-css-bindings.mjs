import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const TARGETS = {
  "win32:arm64": [
    {
      manifestParts: ["@tailwindcss", "oxide", "package.json"],
      packageName: "@tailwindcss/oxide-win32-arm64-msvc",
    },
    {
      manifestParts: ["lightningcss", "package.json"],
      packageName: "lightningcss-win32-arm64-msvc",
    },
  ],
  "win32:x64": [
    {
      manifestParts: ["@tailwindcss", "oxide", "package.json"],
      packageName: "@tailwindcss/oxide-win32-x64-msvc",
    },
    {
      manifestParts: ["lightningcss", "package.json"],
      packageName: "lightningcss-win32-x64-msvc",
    },
  ],
};

const targets = TARGETS[`${process.platform}:${process.arch}`];

if (!targets) {
  process.exit(0);
}

const missingPackages = [];

for (const target of targets) {
  const manifestPath = path.join(process.cwd(), "node_modules", ...target.manifestParts);

  if (!fs.existsSync(manifestPath)) {
    continue;
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const version = manifest.optionalDependencies?.[target.packageName];

  if (!version) {
    continue;
  }

  const installedPath = path.join(
    process.cwd(),
    "node_modules",
    ...target.packageName.split("/"),
  );

  if (!fs.existsSync(installedPath)) {
    missingPackages.push(`${target.packageName}@${version}`);
  }
}

if (missingPackages.length === 0) {
  process.exit(0);
}

console.log(
  `[ensure-native-css-bindings] Installing missing native packages: ${missingPackages.join(", ")}`,
);

const installCommand =
  process.platform === "win32"
    ? `npm.cmd install --no-save --ignore-scripts ${missingPackages.join(" ")}`
    : `npm install --no-save --ignore-scripts ${missingPackages.join(" ")}`;

const result = spawnSync(installCommand, {
  cwd: process.cwd(),
  shell: true,
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
