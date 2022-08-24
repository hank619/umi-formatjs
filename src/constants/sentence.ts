/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-24 17:35:35
 * @Description: 
 */
export const SENATENCE = {
  YARN_INSTALL: `yarn install\n`,
  EXTRACT_EN: `npx formatjs extract "(congifs||platforms||src)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/en-US.json --format src/locales/TMS.js`,
  EXTRACT_ID: `npx formatjs extract "(congifs||platforms||src)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/id-ID.json --format src/locales/TMS.js`,
  EXTRACT_TH: `npx formatjs extract "(congifs||platforms||src)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/th-TH.json --format src/locales/TMS.js`,
  EXTRACT_VI: `npx formatjs extract "(congifs||platforms||src)/**/*.ts*" --ignore="**/*.d.ts" --out-file src/locales/vi-VN.json --format src/locales/TMS.js`,
}