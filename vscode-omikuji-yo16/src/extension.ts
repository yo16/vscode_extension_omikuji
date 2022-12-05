import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-omikuji-yo16" is now active!');

	let disposable = vscode.commands.registerCommand('vscode-omikuji-yo16.helloWorld', () => {
		const omikujiCandidates = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
		const omikujiResult = omikujiCandidates[Math.floor(Math.random()*omikujiCandidates.length)];

		vscode.window.showInformationMessage(`あなたの運勢は${omikujiResult}です！`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
