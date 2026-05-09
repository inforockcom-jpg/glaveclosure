import type { APIRoute } from 'astro';
import { prefectures } from '../data/prefectures';

const siteUrl = 'https://graveclosure.xyz';

export const GET: APIRoute = () => {
  const now = new Date().toISOString();
  const urls = [
    `${siteUrl}/`,
    ...prefectures.map((prefecture) => `${siteUrl}/${prefecture.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${url === `${siteUrl}/` ? '1.0' : '0.9'}</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
