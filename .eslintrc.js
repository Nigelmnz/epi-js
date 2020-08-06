module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
    ],
    env: {
        node: true,
    },
    ignorePatterns: ["**/*.js"],
    rules: {
        "@typescript-eslint/no-this-alias": "off",
    },
};
