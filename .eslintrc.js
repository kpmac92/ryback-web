module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: ["react-hooks"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "linebreak-style": [2, "windows"],
        "quotes": [2, "single"],
        "react/prop-types": [0],
        "prettier/prettier": ["error", {
           "endOfLine":"auto",
           "singleQuote":true
         }],
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};