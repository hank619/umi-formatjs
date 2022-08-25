# umi-formatjs README

A VSCode exetension for umi project that easily extract i18n materials with just a click. 

## Features

### Init project
> Init with basic files needed for formatjs to extract materials.   
> It mainly do 5 things   
1. create folder `locales`
2. create locales json files `en-US.json`, `id-ID.json`, `th-TH.json` and `vi-VN.json`
3. create formater file TMS.js for formatjs
4. add '@formatjs/cli' to package.json
5. run `yarn install`

### Extract i18n
> Extract materials from the source code.   
> It runs `npx formatjs extracat` for all 4 locales.

![demo](https://raw.githubusercontent.com/matrixyf/pictureRepo/main/demo.gif)

## Requirements

UMI project written by Typescript

## Extension Settings

* `umi-formatjs.includeFolders`: The folders that want formatjs/cli to extract from, defaut value is `src`. If you want to specific multiple foleders, concat them with `||`.