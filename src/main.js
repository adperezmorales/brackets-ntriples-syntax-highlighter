/*jslint devel:true */

define(function (require, exports, module) {
	'use strict';
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	LanguageManager.defineLanguage("ntriples", {
		name: "N-Triples",
		mode: "ntriples",
		fileExtensions: ["nt"],
		lineComment: ["#"],
		blockComment: ["#","#"]
	});

	console.log("N-Triples syntax highlighting extension loaded");
});
