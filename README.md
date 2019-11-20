# Hundred5 Babel preset

This preset configures Babel to transform TypeScript and React code with all new fancy JavaScript and TypeScript features.

## Usage

Add `@hundred5/babel-preset` to the dev dependencies and then include it in the Babel config:

```json
{
  "presets": ["@hundred5/babel-preset"]
}
```

Don't forget to also install `core-js`.

App-specific plugins, such as Emotion or lodash, should be installed in the app and not added to this preset, as different apps may require different versions of the plugins.