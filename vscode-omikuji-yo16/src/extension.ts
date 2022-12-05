import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vscode-omikuji-yo16.openOmikuji', () => {
		const omikujiCandidates = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
		const omikujiResult = omikujiCandidates[Math.floor(Math.random()*omikujiCandidates.length)];

		vscode.window.showInformationMessage(`あなたの運勢は${omikujiResult}です！`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
