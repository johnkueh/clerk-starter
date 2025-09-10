import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  // Base Next.js and TypeScript configuration
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Global ignores
  {
    ignores: [
      "generated/**",
      "next-env.d.ts",
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      ".cache/**",
      "coverage/**",
      ".turbo/**",
      "*.min.js",
    ],
  },

  // Custom rules and plugins
  {
    plugins: {
      "unused-imports": unusedImports,
      prettier: prettier,
    },
    rules: {
      // Prettier integration
      "prettier/prettier": "error",

      // Unused imports - configured for auto-fix
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "none", // Don't check function arguments
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      // Disable base ESLint unused-vars since we're using unused-imports
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
