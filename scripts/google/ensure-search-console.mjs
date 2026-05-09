import {
  getGoogleClients,
  getSitemapUrl,
  normalizeSiteUrl
} from './shared.mjs';

const siteUrl = normalizeSiteUrl(process.env.SITE_URL);
const sitemapUrl = getSitemapUrl(siteUrl, process.env.SITEMAP_URL);

const { siteVerification, webmasters } = await getGoogleClients();

try {
  await siteVerification.webResource.insert({
    verificationMethod: 'FILE',
    requestBody: {
      site: {
        identifier: siteUrl,
        type: 'SITE'
      }
    }
  });
  console.log(`Verified ownership for ${siteUrl}`);
} catch (error) {
  const status = error?.response?.status;
  const body = error?.response?.data;

  if (status === 409) {
    console.log(`Ownership already verified for ${siteUrl}`);
  } else {
    console.error('Failed to verify ownership.', body ?? error);
    throw error;
  }
}

try {
  await webmasters.sites.add({ siteUrl });
  console.log(`Added ${siteUrl} to Search Console`);
} catch (error) {
  const status = error?.response?.status;
  const body = error?.response?.data;

  if (status === 409) {
    console.log(`${siteUrl} is already present in Search Console`);
  } else {
    console.error('Failed to add Search Console property.', body ?? error);
    throw error;
  }
}

await webmasters.sitemaps.submit({
  siteUrl,
  feedpath: sitemapUrl
});

console.log(`Submitted sitemap: ${sitemapUrl}`);
