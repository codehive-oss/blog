import axios from "axios";
import type { WP_REST_API_Post, WP_REST_API_Posts } from "wp-types";
import { routes } from "./routes";

export const getPost = async (id: number): Promise<WP_REST_API_Post | null> => {
  try {
    const resp = await axios.get(routes.post(id));
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const getPostBySlug = async (
  slug: string,
): Promise<WP_REST_API_Post | null> => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.slug == slug)[0] ?? null;
};

export const getAllPosts = async (): Promise<WP_REST_API_Posts> => {
  const resp = await axios.get(routes.posts());
  return resp.data;
};

export const getPostOfCategory = async (
  id: number,
): Promise<WP_REST_API_Posts> => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.categories?.includes(id));
};
