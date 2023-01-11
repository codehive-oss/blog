import type { WP_REST_API_Attachment } from "wp-types";
import { routes } from "./routes";

export const getMedia = async (
  id: number,
): Promise<WP_REST_API_Attachment | null> => {
  const resp = await fetch(routes.media(id));
  return (await resp.json()) ?? null;
};
