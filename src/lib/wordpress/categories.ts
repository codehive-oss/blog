import { routes } from "./routes";
import type { WP_REST_API_Categories, WP_REST_API_Category } from "wp-types";

export const getAllCategories = async (): Promise<WP_REST_API_Categories> => {
  const resp = await fetch(routes.categories());
  return await resp.json();
};

export const getCategoryById = async (
  id: number,
): Promise<WP_REST_API_Category | null> => {
  const resp = await fetch(routes.category(id));
  return (await resp.json()) ?? null;
};

export const getCategoriesByIds = async (
  ids: number[],
): Promise<WP_REST_API_Categories> => {
  if (!ids) return [];
  const categories = await getAllCategories();
  return categories.filter((category) => ids.includes(category.id));
};

export const getCategoryBySlug = async (
  slug: string,
): Promise<WP_REST_API_Category | null> => {
  const categories = await getAllCategories();
  return categories.filter((category) => category.slug == slug)[0] ?? null;
};
