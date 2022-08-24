/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-23 19:51:53
 * @Description: 
 */
import { window } from "vscode";
import { OPERATIONS } from "./operation";
import * as vscode from 'vscode';

export async function chooseOperation() {
  const operation = await window.showQuickPick(Object.values(OPERATIONS));
  if (operation === OPERATIONS.INIT_PROJECT) {
    vscode.commands.executeCommand('umi-formatjs.initProject');
  } else if (operation === OPERATIONS.EXTRACT_I18N) {
    vscode.commands.executeCommand('umi-formatjs.extractI18n');
  } else {
    // doNothing
  }
}