module.exports = api => {
  const test = api.env("test");

  return {
    presets: [
      "@babel/preset-typescript",
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          targets: test ? { node: "current" } : undefined,
          modules: test ? "commonjs" : false
        }
      ]
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-syntax-dynamic-import"
    ],
    env: {
      test: {
        plugins: [["dynamic-import-node", { noInterop: true }]]
      }
    }
  };
};
