# umi-formatjs README

A VSCode exetension for umi project that easily extract i18n materials with just a click. 

## Features

### Init project
> Init with basic files needed for formatjs to extract materials.   
> It mainly do 5 things   
1. create folder `/locales`
2. create country folders under `/locaes` folder, like `/en-US`, `/id-ID`, `/th-TH` and `/vi-VN`
3. create formater file `TMS.js` and `index.json` file under each country folder
4. create TS export file under `/locales` folder, like `en-US.ts`, `id-ID.ts`, `th-TH.ts` and `vi-VN.ts`
5. add '@formatjs/cli' to package.json
6. run `yarn install`

### Extract i18n
> Extract materials from the source code.   
> It runs `npx formatjs extracat` for all 4 locales.

![demo](https://raw.githubusercontent.com/matrixyf/pictureRepo/main/umi-formatjs.gif)

## Requirements

UMI project written by Typescript

## Extension Settings

* `umi-formatjs.includeFolders`: The folders that formatjs/cli want to extract from, defaut value is `src`. If you want to specific multiple foleders, concat them with `,`
* `umi-formatjs.countries`: The countries that formatjs want to support, defaut value is `en-US,id-ID,th-TH,vi-VN`. If you want to specific more countries, concat them with `,`