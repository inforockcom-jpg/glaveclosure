# Search Console Automation

## What this automates

On every push to `main`, GitHub Actions can:

1. Generate a Google file-verification HTML file for the site root URL
2. Build the Astro site with the Vercel CLI
3. Deploy the site to Vercel
4. Verify URL-prefix ownership in Google Site Verification
5. Add the property to Google Search Console
6. Submit the sitemap URL to Search Console

This is implemented by:

- `.github/workflows/deploy-and-search-console.yml`
- `scripts/google/generate-verification-file.mjs`
- `scripts/google/ensure-search-console.mjs`

## Required GitHub secrets

- `GOOGLE_SERVICE_ACCOUNT_JSON`
  - Full JSON credentials for the Google service account
- `VERCEL_TOKEN`
  - Vercel personal access token
- `VERCEL_ORG_ID`
  - Vercel team or user ID (`orgId` in `.vercel/project.json`)
- `VERCEL_PROJECT_ID`
  - Vercel project ID (`projectId` in `.vercel/project.json`)

## Required GitHub repository variables

- `SITE_URL`
  - Example: `https://graveclosure.xyz/`
- `SITEMAP_URL`
  - Example: `https://graveclosure.xyz/sitemap.xml`

## Important notes

- Use the root URL-prefix property, for example `https://graveclosure.xyz/`
  - Do not automate page-path properties like `https://graveclosure.xyz/osaka/` unless you have a very specific reason.
- The Google Indexing API is **not** for normal LP pages or standard blog posts.
  - It is intended for limited content types such as `JobPosting` and some livestream use cases.
  - For standard Astro LP/blog pages, the correct automation path is:
    - deploy
    - verify ownership
    - add property
    - submit sitemap

## Local test commands

```bash
npm run gsc:generate-verification
npm run gsc:sync
```
