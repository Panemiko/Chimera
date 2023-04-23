/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "space-before-function-paren": "off",
    "padded-blocks": "off",
    "no-trailing-spaces": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "eol-last": ["warn", "always"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 1,
      },
    ],
    "prettier/prettier": [
      "warn",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "max-len": [
      "warn",
      {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
