/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-24 17:35:35
 * @Description: 
 */
export const SENATENCE = {
  YARN_INSTALL: `yarn install\n`,
  EXTRACT_EN: `npx formatjs extract "({0}||)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/en-US/index.json --format src/locales/en-US/TMS.js`,
  EXTRACT_ID: `npx formatjs extract "({0}||)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/id-ID/index.json --format src/locales/id-ID/TMS.js`,
  EXTRACT_TH: `npx formatjs extract "({0}||)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/th-TH/index.json --format src/locales/th-TH/TMS.js`,
  EXTRACT_VI: `npx formatjs extract "({0}||)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/vi-VN/index.json --format src/locales/vi-VN/TMS.js`,
};