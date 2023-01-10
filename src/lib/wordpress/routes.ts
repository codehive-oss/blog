import { WP_URL } from "../env";

const BASE_URL = `${WP_URL}/wp-json/wp/v2`;

export const routes = {
  posts: () => `${BASE_URL}/posts`,
  post: (id: number) => `${BASE_URL}/posts/${id}`,
  users: () => `${BASE_URL}/users`,
  user: (id: number) => `${BASE_URL}/users/${id}`,
};
