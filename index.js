const fetch = require("node-fetch");
const btoa = require("btoa");
const fs = require("fs");
const TypeDoc = require("typedoc");

const user = "Waryserpant122";
const repo = "tpdoc-test";

const url = `https://api.github.com/repos/${user}/${repo}/contents/src`;

async function getFileData() {
	const res = await fetch(url);
	const data = await res.json();
	//console.log(data);
	const allFileData = [];

	const fileDataArr = data.map((f) => f.name);
	for (const file of fileDataArr) {
		const fileData = await fetch(
			`https://raw.githubusercontent.com/Waryserpant122/tpdoc-test/main/src/${file}`
		);
		const jsonFileData = await fileData.text();
		fs.writeFileSync(`dload/${file}`, jsonFileData, (err) => {
			console.log(err);
			return;
		});
		allFileData.push(jsonFileData);
	}

	return fileDataArr;
}

async function getTypeDocJson() {
	const filePaths = await getFileData();
	const app = new TypeDoc.Application();

	app.options.addReader(new TypeDoc.TSConfigReader());

	const paths = filePaths.map((file) => {
		return "dload/" + file;
	});

	for (const file of paths) {
		console.log(file);
		app.bootstrap({
			entryPoints: [`${file}`],
		});

		const project = app.convert();
		if (project) {
			const outputDir = "docs";
			await app.generateJson(
				project,
				`${outputDir}/${file}doc.json`
			);
		}
	}
}

getTypeDocJson().catch(console.error);
