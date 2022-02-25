module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  },
};
