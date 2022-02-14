module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json"
    },
    plugins: [
        "@typescript-eslint",
        "prettier"
    ],
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    rules: {
        "prettier/prettier": "error",
        "semi": "error"
    },
    ignorePatterns: ['.eslintrc.js']
}