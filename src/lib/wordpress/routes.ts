import { WP_URL } from "../env";

console.log(WP_URL);
const BASE_URL = `${WP_URL}/wp-json/wp/v2`;

export const routes = {
  posts: () => `${BASE_URL}/posts`,
  post: (id: number) => `${BASE_URL}/posts/${id}`,
  users: () => `${BASE_URL}/users`,
  user: (id: number) => `${BASE_URL}/users/${id}`,
  categories: () => `${BASE_URL}/categories`,
  category: (id: number) => `${BASE_URL}/categories/${id}`,
  media: (id: number) => `${BASE_URL}/media/${id}`,
};
