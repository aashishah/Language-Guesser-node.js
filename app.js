const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];

try{
	const code = franc(input);
	const language = langs.where("3", code);
	console.log(language.name)
}
catch(err){
	console.log("Could not determine language.")
}
