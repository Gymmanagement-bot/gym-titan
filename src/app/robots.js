/**
 * Dynamic Robots.txt for Gym Titan
 * Tells search engines which pages to crawl
 */

export default function robots() {
  const baseUrl = 'https://gymtitan.codeverza.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
