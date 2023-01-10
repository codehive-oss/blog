import axios from "axios";
import { routes } from "./routes";
import type { WP_REST_API_Categories, WP_REST_API_Category } from "wp-types";

export const getAllCategories = async (): Promise<WP_REST_API_Categories> => {
  const resp = await axios.get(routes.categories());
  return resp.data;
};

export const getCategoryById = async (
  id: number,
): Promise<WP_REST_API_Category | null> => {
  const resp = await axios.get(routes.category(id));
  return resp.data ?? null;
};

export const getCategoriesByIds = async (
  ids: number[],
): Promise<WP_REST_API_Categories> => {
  const categories = await getAllCategories();
  return categories.filter((category) => ids.includes(category.id));
};

export const getCategoryBySlug = async (
  slug: string,
): Promise<WP_REST_API_Category | null> => {
  const categories = await getAllCategories();
  return categories.filter((category) => category.slug == slug)[0] ?? null;
};
