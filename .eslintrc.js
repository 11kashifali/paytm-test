module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: [2, "never"],
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any"
        }
      }
    ]
  },
  plugins: ["vue"]
}
