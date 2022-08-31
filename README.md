# @anoesj/eslint-config-anoesj
## Installation
Install using your Node.js package manager of choice:
```bash
pnpm i -D @anoesj/eslint-config-anoesj # or npm/yarn/etc.
```

You need to have NPM package `eslint` installed in order to start using ESLint with this configuration. Assuming your IDE of choice is VSCode, it's recommended to install [VSCode plugin "ESLint" by Dirk Baeumer](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and set it up as follows in your VSCode workspace's `settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.packageManager": "{{ insert workspace NPM package manager here }}",
  "eslint.validate": [
    "javascript",
  ],
}
```

Your `.eslintrc.json` should at the very least look like this to use this config:
```json
{
  "extends": "@anoesj/eslint-config-anoesj"
}
```

See https://eslint.org/docs/developer-guide/shareable-configs for more info on shareable ESLint configs.