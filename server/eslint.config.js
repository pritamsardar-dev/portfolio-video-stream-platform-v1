// npm install -D eslint @eslint/js globals
// npm install -D @stylistic/eslint-plugin
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";

export default [
  {
    ignores: ["node_modules", "dist", "build", "coverage", "*.min.js"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.node,
      },
    },

    plugins: {
      "@stylistic": stylistic,
    },

    rules: {
      semi: ["error", "always"],

      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],

      indent: ["error", 2],

      "comma-dangle": ["error", "always-multiline"],

      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "@stylistic/max-len": [
        "warn",
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: false,
        },
      ],
    },
  },
];
