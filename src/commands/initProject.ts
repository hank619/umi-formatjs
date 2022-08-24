/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-23 19:52:05
 * @Description: 
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { writeTMSSync } from '../untils';

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

  // mkdir locales
  const localesFolder = path.join(rootPath, '/src', '/locales');

  if (!existsSync(localesFolder)) {
    mkdirSync(localesFolder);
  } 
  // create TMS file
  const tmsFile = path.join(localesFolder, 'TMS.js');
  if (!existsSync(tmsFile)) {
    writeTMSSync(tmsFile);
  }

  // create en-US.ts ... 
  const countryFiles = [];
  const enFile = path.join(localesFolder, 'en-US.json');
  const idFile = path.join(localesFolder, 'id-ID.json');
  const thFile = path.join(localesFolder, 'th-TH.json');
  const viFile = path.join(localesFolder, 'vi-VN.json');
  countryFiles.push(enFile, idFile, thFile, viFile);
  countryFiles.map(itemFile => {
    if (!existsSync(itemFile)) {
      writeFileSync(itemFile, '{}');
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