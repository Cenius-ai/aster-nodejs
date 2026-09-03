import type { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.min.css" />
        <script src="/theme.js" defer></script>
      </head>
      <body class="bg-surface text-fg font-body antialiased">
        <Component />
      </body>
    </html>
  );
}
