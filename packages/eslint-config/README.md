# `@gergoszaszvaradi/eslint-config`

Personal ESLint configuration and rules

> **Note**: This is an all-round eslint config, meaning it works with nodejs applications and web frontend applications

## Installation
Install this config package:
```bash
npm i -D @gergoszaszvaradi/eslint-config
```
```bash
yarn add -D @gergoszaszvaradi/eslint-config
```

## Usage
Extend your eslint config file with the eslintrc provided by this package.

`.eslintrc.json`
```json
{
    "extends": ["@gergoszaszvaradi/eslint-config"]
}
```
### Overriding Rules
You can still override certain rules by defining the rules again in your config file:

`.eslintrc.json`
```json
{
    // ...
    "rules": {
        "camelCase": "off"
    }
}
```
Before turning off already defined rules, check the eslint documentation for the benefits of using those rules.
* ESLint: https://eslint.org/docs/latest/rules/
* ESLint import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
* ESLint Typescript: https://typescript-eslint.io/rules/

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