# `@gergoszaszvaradi/eslint-config-solid`

Personal SolidJS ESLint configuration and rules

> **Note**: This configuration only provides rules for `solid`. Use [@gergoszaszvaradi/eslint-config](https://www.npmjs.com/package/@gergoszaszvaradi/eslint-config) as well to configure ESLint correctly.

## Installation
Install this config package:
```bash
npm i -D @gergoszaszvaradi/eslint-config @gergoszaszvaradi/eslint-config-solid
```
```bash
yarn add -D @gergoszaszvaradi/eslint-config @gergoszaszvaradi/eslint-config-solid
```

## Usage
Extend your eslint config file with the eslintrc provided by this package.

`.eslintrc.json`
```json
{
    "extends": [
        "@gergoszaszvaradi/eslint-config",
        "@gergoszaszvaradi/eslint-config-solid"
    ]
}
```
### Overriding Rules
You can still override certain rules by defining the rules again in your config file:

`.eslintrc.json`
```json
{
    // ...
    "rules": {
        "solid/components-return-once": "error"
    }
}
```
Before turning off already defined rules, check the eslint documentation for the benefits of using those rules.
* ESLint: https://eslint.org/docs/latest/rules/
* ESLint import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
* ESLint Typescript: https://typescript-eslint.io/rules/
* ESLint Solid: https://github.com/joshwilsonvu/eslint-plugin-solid/tree/main/docs

### Using it on specific environments
By default this configuration is set to support both `node` and `browser`. You can turn off either of these in order to regulate what features are available:

`.eslintrc.json`
```json
{
    // ...
    "env": {
        // this turns node specific features off.
        "node": false,
        // this turns browser specific features off.
        // E.g. DOM related features will be reported.
        "browser": false,
    }
}
```