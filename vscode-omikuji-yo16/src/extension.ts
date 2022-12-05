import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand(
		'vscode-omikuji-yo16.openOmikuji',
		async () => {
			const omikujiCandidates = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
			const omikujiResult = omikujiCandidates[
				Math.floor(Math.random()*omikujiCandidates.length)
			];
			const your_name = await vscode.window.showInputBox({
				title: 'あなたの名前は？',
				value: '太郎'
			});

			if (your_name !== undefined){
				vscode.window.showInformationMessage(`${your_name}さんの運勢は${omikujiResult}です！！`);
			} else {
				vscode.window.showInformationMessage(`あなたの運勢は${omikujiResult}です！！`);
			}
		}
	);
	context.subscriptions.push(disposable);

	
	const button = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		0
	);
	button.command = 'vscode-omikuji-yo16.openOmikuji';
	button.text = 'おみくじをひく';
	context.subscriptions.push(button);
	button.show();
}


