import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { prefectures } from '../data/prefectures';

const siteUrl = 'https://graveclosure.xyz';

export const GET: APIRoute = async () => {
  const now = new Date().toISOString();
  const blogPosts = await getCollection('blog');
  const specializedSlugs = [
    'hakajimai-hio',
    'hakajimai-tetsuduki',
    'hakajimai-atootsugi',
    'hakajimai-trouble',
    'hakajimai-eitaikuyo'
  ];

  const urls = [
    `${siteUrl}/`,
    `${siteUrl}/blog/`,
    `${siteUrl}/tokushoho/`,
    `${siteUrl}/privacy/`,
    ...blogPosts.map((post) => `${siteUrl}/blog/${post.id}/`),
    ...specializedSlugs.map((slug) => `${siteUrl}/${slug}/`),
    ...prefectures.flatMap((prefecture) => [
      `${siteUrl}/${prefecture.slug}/`,
      ...specializedSlugs.map((slug) => `${siteUrl}/${prefecture.slug}/${slug}/`)
    ])
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
