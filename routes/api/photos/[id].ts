import type { Handlers } from "$fresh/server.ts";
import { getPhotoById, getPhotoUrl } from "../../../utils/data.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const photo = getPhotoById(ctx.params.id);
    if (!photo) {
      return new Response(JSON.stringify({ error: "Photo not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({
      ...photo,
      url: getPhotoUrl(photo, "full"),
    }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
