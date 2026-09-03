import type { Handlers } from "$fresh/server.ts";
import { getAlbumWithPhotos } from "../../../utils/data.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const data = getAlbumWithPhotos(ctx.params.id);
    if (!data) {
      return new Response(JSON.stringify({ error: "Album not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
