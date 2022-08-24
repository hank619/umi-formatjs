/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-23 19:52:15
 * @Description: 
 */
import * as vscode from 'vscode';
import { SENATENCE } from '../constants/sentence';

export function extractI18n() {
  const firstWorkSpaceFolder = vscode.workspace.workspaceFolders?.[0];
  const rootPath = firstWorkSpaceFolder?.uri?.path;
  if (!rootPath) {
    vscode.window.showErrorMessage('Invalid workspace');
    return;
  }

  // run `formatjs extract `
  const activeTerminal = vscode.window.activeTerminal;
  if (activeTerminal) {
    activeTerminal.sendText(SENATENCE.EXTRACT_EN);
    activeTerminal.sendText(SENATENCE.EXTRACT_ID);
    activeTerminal.sendText(SENATENCE.EXTRACT_TH);
    activeTerminal.sendText(SENATENCE.EXTRACT_VI);
  } else {
    const newTermianl = vscode.window.createTerminal();
    newTermianl.sendText(SENATENCE.EXTRACT_EN);
    newTermianl.sendText(SENATENCE.EXTRACT_ID);
    newTermianl.sendText(SENATENCE.EXTRACT_TH);
    newTermianl.sendText(SENATENCE.EXTRACT_VI);
  }
}