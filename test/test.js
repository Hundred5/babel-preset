const babel = require("@babel/core");
const path = require("path");
const util = require("util");

const transformFile = util.promisify(babel.transformFile);
const preset = path.join(__dirname, "..", "index.js");

it("transforms for the browser environment", async () => {
  const result = await transformFile(path.join(__dirname, "file.tsx"), {
    presets: [preset],
    envName: "development",
    cwd: __dirname
  });

  expect(result.code).toMatchSnapshot();
});

it("transforms for the test environment", async () => {
  const result = await transformFile(path.join(__dirname, "file.tsx"), {
    presets: [preset],
    envName: "test"
  });

  expect(result.code).toMatchSnapshot();
});
