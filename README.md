# Hundred5 Babel preset

This preset configures Babel to transform TypeScript and React code with all new fancy JavaScript and TypeScript features.

## Usage

Add `@hundred5/babel-preset` to the dev dependencies and then include it in the Babel config:

```json
{
  "presets": ["@hundred5/babel-preset"]
}
```

Don't forget to also install `@babel/runtime`, as the generated code may use helpers from the package.

App-specific plugins, such as Emotion or lodash, should be installed in the app and not added to this preset, as different apps may require different versions of the plugins.

## Features

* Transforms JSX using [React preset](https://babeljs.io/docs/en/babel-preset-react)
* Transforms TypeScript 3.7 syntax using [TypeScript preset](https://babeljs.io/docs/en/babel-preset-typescript)
* Transforms modern JS features (async functions, for example) to code understood by target browsers ([more info here](https://babeljs.io/docs/en/babel-preset-env))
* Transforms imports into `require`s when necessary (running tests in node.js, for example)
* Supports dynamic import (`import('x').then(...)`) in browsers and node.js

## Testing

There are two snapshot tests in the `test` directory. After making changes to the preset run the tests and update the snapshots if needed, but manually verify that the output still makes sense (such as code is properly transformed and there are no helpers missing).