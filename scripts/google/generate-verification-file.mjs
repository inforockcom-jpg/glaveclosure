import fs from 'node:fs/promises';
import path from 'node:path';
import {
  getFileVerificationContent,
  getGoogleClients,
  normalizeSiteUrl
} from './shared.mjs';

const siteUrl = normalizeSiteUrl(process.env.SITE_URL);
const publicDir = path.resolve(process.cwd(), 'public');

const { siteVerification } = await getGoogleClients();
const tokenResponse = await siteVerification.webResource.getToken({
  requestBody: {
    site: {
      identifier: siteUrl,
      type: 'SITE'
    },
    verificationMethod: 'FILE'
  }
});

const token = tokenResponse.data.token;
if (!token) {
  throw new Error('Google did not return a verification token.');
}

const fileName = token.endsWith('.html') ? token : `${token}.html`;
const filePath = path.join(publicDir, fileName);

await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(filePath, `${getFileVerificationContent(token)}\n`, 'utf8');

console.log(`Generated verification file: public/${fileName}`);
