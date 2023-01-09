import axios from "axios";
import type { WP_REST_API_Posts } from "wp-types";
import { routes } from "./routes";

export const getAllPosts = async (): Promise<WP_REST_API_Posts> => {
  const resp = await axios.get(routes.posts());
  return resp.data;
};
