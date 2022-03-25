module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks", "import"],
  rules: {
    "react/prop-types": "off",
    "react/no-unescaped-entities": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "warn",
    "func-names": "warn",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "max-classes-per-file": "off",
    "no-nested-ternary": "off",
    "no-new": "off",
    "no-plusplus": "off",
    "no-process-exit": "off",
    "no-restricted-globals": "off",
    "node/exports-style": "off",
    "node/no-unpublished-import": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "no-console": ["warn", {allow: ["warn", "debug", "error", "info"]}],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "react/no-array-index-key": "warn",
    "no-shadow": "off",
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "flow",
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: true,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        proseWrap: "always",
        jsxSingleQuote: true,
        importOrder: ["^[./]"],
        importOrderSeparation: true,
        importOrderSortSpecifiers: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".json"],
      },
    },
    "import/ignore": ["node_modules", ".json$", ".(scss|css)$"],
  },
};