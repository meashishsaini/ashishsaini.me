const SUPPORTED_LANGUAGES = Object.freeze({
	en: "en",
	hi: "hi",
});

exports.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;

exports.SUPPORTED_LANGUAGES_NAME = Object.freeze({
	[SUPPORTED_LANGUAGES.en]: "English",
	[SUPPORTED_LANGUAGES.hi]: "हिन्दी",
});

exports.DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.en;
