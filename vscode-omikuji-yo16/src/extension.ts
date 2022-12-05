import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const omikujiFigures = {
		'大吉': 'https://2.bp.blogspot.com/-q62M2UFmkwQ/UZNyKgFFdNI/AAAAAAAASiI/_cZv1Si4jWE/s400/syougatsu2_omikuji.png',
		'吉': 	'https://2.bp.blogspot.com/-27IG0CNV-ZE/VKYfn_1-ycI/AAAAAAAAqXw/fr6Y72lOP9s/s400/omikuji_kichi.png',
		'中吉': 'https://3.bp.blogspot.com/-_z-n-7gO3KA/T3K7MU3MdGI/AAAAAAAAE-k/8qs-jxqS4LE/s400/omikuji_chuukichi.png',
		'小吉': 'https://3.bp.blogspot.com/-nZt5pjGWT9E/T3K7TJ4wEZI/AAAAAAAAE_E/c1X2-N54EYo/s400/omikuji_syoukichi.png',
		'末吉': 'https://3.bp.blogspot.com/-JLNa8mwZRnU/T3K7StR-bEI/AAAAAAAAE-8/rQrDomz5MSw/s400/omikuji_suekichi.png',
		'凶': 	'https://4.bp.blogspot.com/-qCfF4H7YOvE/T3K7R5ZjQVI/AAAAAAAAE-4/Hd1u2tzMG3Q/s400/omikuji_kyou.png',
		'大凶': 'https://2.bp.blogspot.com/-h61ngruj0tE/T3K7RDUWmPI/AAAAAAAAE-0/KXtPY8fDwco/s400/omikuji_daikyou.png'
	};
	
	function getWebviewContent(omikujiResult: keyof typeof omikujiFigures) {
		return `<!DOCTYPE html>
			<html lang="ja">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>
			<body>
				<img src="${omikujiFigures[omikujiResult]}" />
			</body>
			</html>`;
	}

	let disposable = vscode.commands.registerCommand(
		'vscode-omikuji-yo16.openOmikuji',
		async () => {
			const omikujiCandidates = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'] as const;
			const omikujiResult = omikujiCandidates[
				Math.floor(Math.random()*omikujiCandidates.length)
			];
			const your_name = await vscode.window.showInputBox({
				title: 'あなたの名前は？',
				value: '太郎'
			});

			if (your_name !== undefined){
				const panel = vscode.window.createWebviewPanel(
					'omikuji',
					`${your_name}さんの運勢は${omikujiResult}です！`,
					vscode.ViewColumn.One,
					{}
				);
				panel.webview.html = getWebviewContent(omikujiResult);
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


