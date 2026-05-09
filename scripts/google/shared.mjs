import { google } from 'googleapis';

const SEARCH_CONSOLE_SCOPES = [
  'https://www.googleapis.com/auth/siteverification',
  'https://www.googleapis.com/auth/webmasters'
];

export function normalizeSiteUrl(value) {
  if (!value) {
    throw new Error('SITE_URL is required.');
  }

  const url = new URL(value);
  if (!url.pathname.endsWith('/')) {
    url.pathname = `${url.pathname}/`;
  }

  return url.toString();
}

export function getSitemapUrl(siteUrl, explicitSitemapUrl) {
  return explicitSitemapUrl ? new URL(explicitSitemapUrl).toString() : new URL('sitemap.xml', siteUrl).toString();
}

export function getServiceAccountCredentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is required.');
  }

  const parsed = JSON.parse(raw);
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON must include client_email and private_key.');
  }

  return parsed;
}

export async function getGoogleClients() {
  const auth = new google.auth.GoogleAuth({
    credentials: getServiceAccountCredentials(),
    scopes: SEARCH_CONSOLE_SCOPES
  });

  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  return {
    siteVerification: google.siteVerification('v1'),
    webmasters: google.webmasters('v3')
  };
}

export function getFileVerificationContent(token) {
  return `google-site-verification: ${token}`;
}
