$languages = "en", "hi"

Foreach ($language in $languages) {
    npm run compile -- intl_raw/$language.json --out-file src/intl/$language.json
}
