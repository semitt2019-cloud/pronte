// Fail the build unless every USSD code on /packages/ is *777*<pkg>*441605#
import { existsSync, readFileSync } from 'node:fs';

const file = 'dist/packages/index.html';
if (!existsSync(file)) {
  console.error(`Missing ${file}. Build the site before running this check.`);
  process.exit(1);
}

const html = readFileSync(file, 'utf8');
const matches = html.match(/\*777\*[^<#\s"]*(?:#|%23)/g) ?? [];
if (matches.length === 0) {
  console.error(`No USSD codes found in ${file}`);
  process.exit(1);
}

const codes = matches.map((code) => code.replace(/%23$/, '#'));
const valid = /^\*777\*\d+\*441605#$/;
const bad = [...new Set(codes.filter((code) => !code.includes('441605') || !valid.test(code)))];
const unique = [...new Set(codes)];

console.log(`Found ${codes.length} USSD codes (${unique.length} unique) in ${file}`);
if (bad.length > 0) {
  console.error('USSD codes missing agent 441605:');
  for (const code of bad) console.error(` - ${code}`);
  process.exit(1);
}

console.log('Every USSD code contains 441605');
