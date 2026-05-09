import type { APIRoute } from 'astro';

const siteUrl = 'https://graveclosure.xyz';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
