import axios from "axios";
import type { WP_REST_API_User, WP_REST_API_Users } from "wp-types";
import { routes } from "./routes";

export const getAllUsers = async (): Promise<WP_REST_API_Users> => {
  const resp = await axios.get(routes.users());
  return resp.data;
};

export const getUser = async (id: number): Promise<WP_REST_API_User | null> => {
  try {
    const resp = await axios.get(routes.user(id));
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const getUserBySlug = async (
  slug: string,
): Promise<WP_REST_API_User | null> => {
  const user = await (
    await getAllUsers()
  ).filter((user) => user.slug == slug)[0];
  return user ?? null;
};
