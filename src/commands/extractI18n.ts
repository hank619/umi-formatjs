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
  const includeFolers = configuration.get('includeFolders');

  const activeTerminal = vscode.window.activeTerminal;
  if (activeTerminal) {
    activeTerminal.sendText(stringFormat(SENATENCE.EXTRACT_EN, includeFolers));
    activeTerminal.sendText(stringFormat(SENATENCE.EXTRACT_ID, includeFolers));
    activeTerminal.sendText(stringFormat(SENATENCE.EXTRACT_TH, includeFolers));
    activeTerminal.sendText(stringFormat(SENATENCE.EXTRACT_VI, includeFolers));
  } else {
    const newTermianl = vscode.window.createTerminal();
    newTermianl.sendText(stringFormat(SENATENCE.EXTRACT_EN, includeFolers));
    newTermianl.sendText(stringFormat(SENATENCE.EXTRACT_ID, includeFolers));
    newTermianl.sendText(stringFormat(SENATENCE.EXTRACT_TH, includeFolers));
    newTermianl.sendText(stringFormat(SENATENCE.EXTRACT_VI, includeFolers));
  }
}