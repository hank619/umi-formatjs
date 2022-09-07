/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-23 19:52:05
 * @Description: 
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { COUNTRIES } from '../constants/country';
import { writeTMSSync, writeTsExportSync } from '../untils';

export async function initProject() {
  const firstWorkSpaceFolder = vscode.workspace.workspaceFolders?.[0];
  const rootPath = firstWorkSpaceFolder?.uri?.path;
  if (!rootPath) {
    vscode.window.showErrorMessage('Invalid workspace');
    return;
  }
  // add @formatjs/cli to package.json
  const packageJsonFile = path.join(rootPath, 'package.json');
  if (!existsSync(packageJsonFile)) {
    vscode.window.showErrorMessage('Can not find package,json file, pls ensure this is an node project');
    return;
  } else {
    const rawData = readFileSync(packageJsonFile, {encoding: 'utf-8'});
    const json = JSON.parse(rawData);
    json['devDependencies']['@formatjs/cli'] = "^4.2.7";
    const newData = JSON.stringify(json, null, "\t");
    writeFileSync(packageJsonFile, newData);
  }
  
  // mkdir folders for diffrent countries
  const localesFolder = path.join(rootPath, '/src', '/locales');
  const countryFolders = COUNTRIES.map(country =>  path.join(localesFolder, country));
  countryFolders.forEach(folder => {
    if (!existsSync(folder)) {
      mkdirSync(folder, { recursive: true});
    }
  });

  // create index.json and TMS file for each country
  countryFolders.forEach(folder => {
    const countryFile = path.join(folder, 'index.json');
    if (!existsSync(countryFile)) {
      writeFileSync(countryFile, '{}');
    }
    const tmsFile = path.join(folder, 'TMS.js');
    if (!existsSync(tmsFile)) {
      writeTMSSync(tmsFile);
    }
  });

  // create ts file to export the index.json out
  COUNTRIES.forEach(country => {
    const tsExportFile = path.join(localesFolder, `${country}.ts`);
    if (!existsSync(tsExportFile)) {
      writeTsExportSync(tsExportFile, country);
    }
  });

  // run `yarn install`
  const activeTerminal = vscode.window.activeTerminal;
  if (activeTerminal) {
    activeTerminal.sendText(`yarn install\n`);
  } else {
    const newTermianl = vscode.window.createTerminal();
    newTermianl.sendText(`yarn install\n`);
  }
}