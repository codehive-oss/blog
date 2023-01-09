import axios from "axios";
import type { WP_REST_API_User } from "wp-types";
import { routes } from "./routes";

export const getUser = async (id: number): Promise<WP_REST_API_User> => {
  const resp = await axios.get(routes.user(id));
  return resp.data;
};
