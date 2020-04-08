module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier", "@vue/prettier/@typescript-eslint"],
  parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 2020,
      ecmaFeatures: {
          // jsx: false
      }
  },
  rules: {
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "prettier/prettier": [
          "error",
          {
              tabWidth: 4,
              useTabs: false,
              semi: false,
              singleQuote: true,
              trailingComma: "none",
              bracketSpacing: true,
              jsxBracketSameLine: true,
              // arrowParens: 'always',
              printWidth: 200
          }
      ],
      "prefer-rest-params": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/no-angle-bracket-type-assertion": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-this-alias": "off",
      "vue/require-component-is": "off",
  }
}

