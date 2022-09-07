/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-23 19:52:15
 * @Description: 
 */
import * as vscode from 'vscode';
import { SENATENCE } from '../constants/sentence';
import { stringFormat } from '../untils';

export function extractI18n() {
  const firstWorkSpaceFolder = vscode.workspace.workspaceFolders?.[0];
  const rootPath = firstWorkSpaceFolder?.uri?.path;
  if (!rootPath) {
    vscode.window.showErrorMessage('Invalid workspace');
    return;
  }

  // run `formatjs extract `
  const configuration = vscode.workspace.getConfiguration('umi-formatjs');
  const includeFolersConfig = configuration.get<string>('includeFolders') || '';
  const includeFolders = includeFolersConfig.split(',');
  const includeFolderString = includeFolders.join('||');
  const countriesConfig = configuration.get<string>('countries') || '';
  const countries = countriesConfig.split(',');

  const activeTerminal = vscode.window.activeTerminal;
  if (activeTerminal) {
    countries.forEach(country => {
      activeTerminal.sendText(stringFormat(SENATENCE.EXTRACT, includeFolderString, country));
    });
  } else {
    const newTermianl = vscode.window.createTerminal();
    countries.forEach(country => {
      newTermianl.sendText(stringFormat(SENATENCE.EXTRACT, includeFolderString, country));
    });
  }
}