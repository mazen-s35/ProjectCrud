module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/essential",
        "prettier",
        // "plugin:vue/vue3-recommended",
        "plugin:vue/base",
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        parser: "@babel/eslint-parser",
    },
    plugins: ["vue", "prettier"],
    rules: {},
};