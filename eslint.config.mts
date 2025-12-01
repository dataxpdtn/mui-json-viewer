import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended",],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: "detect"
      }
    },
  },
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "docs/**",
    ],
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
    }
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      // 'unused-imports/no-unused-imports': 'error',
      // 'unused-imports/no-unused-vars': [
      //   'warn', {
      //     vars: 'all',
      //     varsIgnorePattern: '^_',
      //     args: 'after-used',
      //     argsIgnorePattern: '^_'
      //   }],
    }
  }
]);
