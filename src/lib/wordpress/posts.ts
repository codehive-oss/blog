import type { WP_REST_API_Post, WP_REST_API_Posts } from "wp-types";
import { routes } from "./routes";

export const getPost = async (id: number): Promise<WP_REST_API_Post | null> => {
  try {
    const resp = await fetch(routes.post(id));
    return await resp.json();
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
  const resp = await fetch(routes.posts());
  return await resp.json();
};

export const getPostOfCategory = async (
  id: number,
): Promise<WP_REST_API_Posts> => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.categories?.includes(id));
};
