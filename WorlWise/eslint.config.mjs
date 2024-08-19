import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import parser from "@babel/eslint-parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser,
      parserOptions: {
        requireConfigFile: false, // Needed if you don't have a Babel config file
        babelOptions: {
          presets: ["@babel/preset-react"], // Handle JSX syntax
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Disable the rule
      'react/prop-types': 'off',
    },
  },
];
