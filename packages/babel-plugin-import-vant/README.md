# babel-plugin-import-vant

## Install

```sh
$ yarn add babel-plugin-import-vant -D
```

## Usage

Just a function that return a config now. Please config `babel.config.js` like:

```diff
module.exports = {
  ...
  plugins: [
+    ...require('babel-plugin-import-vant').default()
  ],
};
```
