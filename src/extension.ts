import * as vscode from 'vscode';
import { chooseOperation } from './commands/chooseOperation';
import { extractI18n } from './commands/extractI18n';
import { initProject } from './commands/initProject';

export function activate(context: vscode.ExtensionContext) {
	
  vscode.window.showInformationMessage("umi-formatjs init complete");

	let chooseDisposable = vscode.commands.registerCommand('umi-formatjs.chooseOperation', async () => {
    await chooseOperation();
	});
  let initDisposable = vscode.commands.registerCommand('umi-formatjs.initProject', async () => {
    await initProject();
	});
  let extractDisposable = vscode.commands.registerCommand('umi-formatjs.extractI18n', async () => {
    await extractI18n();
	});

	context.subscriptions.push(chooseDisposable, initDisposable, extractDisposable);
}

export function deactivate() {}
