import type { Handlers } from "$fresh/server.ts";
import { getAlbums } from "../../utils/data.ts";

export const handler: Handlers = {
  GET(_req) {
    const albums = getAlbums().map(({ id, title, description, cover }) => ({
      id,
      title,
      description,
      cover,
    }));
    return new Response(JSON.stringify(albums), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
