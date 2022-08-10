# `@gergoszaszvaradi/eslint-react`

Personal react ESLint configuration and rules

> **Note**: This configuration only provides rules for `react` and `react-hooks`. Use [@gergoszaszvaradi/eslint](https://www.npmjs.com/package/@gergoszaszvaradi/eslint) as well to configure ESLint correctly.

## Installation
Install this config package:
```bash
npm i -D @gergoszaszvaradi/eslint @gergoszaszvaradi/eslint-react
```
```bash
yarn add -D @gergoszaszvaradi/eslint @gergoszaszvaradi/eslint-react
```

## Usage
Extend your eslint config file with the eslintrc provided by this package.

`.eslintrc.json`
```json
{
    "extends": [
        "@gergoszaszvaradi/eslint",
        "@gergoszaszvaradi/eslint-react"
    ]
}
```
### Overriding Rules
You can still override certain rules by defining the rules again in your config file:

`.eslintrc.json`
```json
{
    ...
    "rules": {
        "react/jsx-indent": ["error", 2]
    }
}
```
Before turning off already defined rules, check the eslint documentation for the benefits of using those rules.
* ESLint: https://eslint.org/docs/latest/rules/
* ESLint import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
* ESLint Typescript: https://typescript-eslint.io/rules/
* ESLint React: https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
* ESLint React Hooks: https://reactjs.org/docs/hooks-rules.html

### Using it on specific environments
By default this configuration is set to support both `node` and `browser`. You can turn off either of these in order to regulate what features are available:

`.eslintrc.json`
```json
{
    ...
    "env": {
        // this turns node specific features off.
        "node": false,
        // this turns browser specific features off.
        // E.g. DOM related features will be reported.
        "browser": false,
    }
}
```