# @anoesj/eslint-config-anoesj
## Installation
Install using your Node.js package manager of choice:
```bash
pnpm i -D github:anoesj/eslint-config-anoesj
```

You need to have NPM package `eslint` installed in order to start using ESLint with this configuration. Assuming your IDE of choice is VSCode, it's recommended to install [VSCode plugin "ESLint" by Dirk Baeumer](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and set it up as follows in your VSCode workspace's `settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    // "source.fixAll": "never", // optional
    "source.fixAll.eslint": "explicit"
  },
  "eslint.packageManager": "pnpm",
  "eslint.validate": [
    "javascript",
  ],
}
```

When using flat config, use an instance of `FlatCompat` as long as this module hasn't been ported to flat config yet:
```js
const compat = new FlatCompat(...);
export default [
  {
    ...compat.extends('@anoesj/eslint-config-anoesj'),
  },
];
```

With old school config, your ESLint config file should at the very least extends this config:
```json
{
  "extends": [
    "@anoesj/eslint-config-anoesj"
  ]
}
```

See https://eslint.org/docs/developer-guide/shareable-configs for more info on shareable ESLint configs.