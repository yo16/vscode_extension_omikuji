import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-omikuji-yo16" is now active!');

	let disposable = vscode.commands.registerCommand('vscode-omikuji-yo16.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-omikuji-yo16!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
