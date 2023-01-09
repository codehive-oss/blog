export const WP_URL = process.env.WORDPRESS_URL!.endsWith("/")
  ? process.env.WORDPRESS_URL?.substring(
      0,
      process.env.WORDPRESS_URL.length - 1,
    )
  : process.env.WORDPRESS_URL;
