#!/usr/bin/env -S deno run -A --watch=static/,routes/
import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

// Build CSS first
try {
  const p = new Deno.Command("npx", {
    args: ["tailwindcss", "-i", "./static/styles.css", "-o", "./static/styles.min.css", "--minify"],
    stdout: "inherit",
    stderr: "inherit",
  });
  const { code } = await p.output();
  if (code !== 0) console.warn("Warning: tailwindcss build had non-zero exit");
} catch {
  console.warn("Warning: Could not run tailwindcss. Using pre-built CSS if available.");
}

await dev(import.meta.url, "./main.ts", config);
