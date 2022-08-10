module.exports = {
    plugins: [
        "react",
        "react-hooks",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/boolean-prop-naming": [
            "error",
            {
                rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
            },
        ],
        "react/button-has-type": "off",
        "react/default-props-match-prop-types": [
            "error",
            {
                allowRequiredDefaults: true,
            },
        ],
        "react/destructuring-assignment": ["error", "always"],
        "react/display-name": [
            "warn",
            {
                ignoreTranspilerName: false,
            },
        ],
        "react/forbid-component-props": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/forbid-prop-types": "off",
        "react/function-component-definition": "off",
        "react/jsx-boolean-value": ["warn", "always"],
        "react/jsx-child-element-spacing": "error",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                children: "never",
                props: "never",
            },
        ],
        "react/jsx-curly-newline": [
            "warn",
            {
                multiline: "consistent",
                singleline: "consistent",
            },
        ],
        "react/jsx-curly-spacing": [
            "error",
            {
                spacing: {
                    objectLiterals: "never",
                },
                when: "never",
            },
        ],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
        "react/jsx-fragments": ["error", "element"],
        "react/jsx-handler-names": [
            "warn",
            {
                eventHandlerPrefix: "handle",
                eventHandlerPropPrefix: "on",
            },
        ],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": "off",
        "react/jsx-key": "warn",
        "react/jsx-max-depth": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-newline": [
            "warn",
            {
                prevent: true,
            },
        ],
        "react/jsx-no-bind": "off",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-duplicate-props": [
            "error",
            {
                ignoreCase: false,
            },
        ],
        "react/jsx-no-literals": "off",
        "react/jsx-no-script-url": "off",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "warn",
        "react/jsx-no-useless-fragment": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-pascal-case": [
            "error",
            {
                allowAllCaps: false,
            },
        ],
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-sort-default-props": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-tag-spacing": [
            "error",
            {
                afterOpening: "never",
                beforeClosing: "never",
                beforeSelfClosing: "always",
                closingSlash: "never",
            },
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/jsx-wrap-multilines": [
            "error",
            {
                arrow: "parens-new-line",
                assignment: "parens",
                condition: "parens-new-line",
                declaration: "parens-new-line",
                logical: "parens-new-line",
                prop: "parens-new-line",
                return: "parens-new-line",
            },
        ],
        "react/no-access-state-in-setstate": "error",
        "react/no-adjacent-inline-elements": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "warn",
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],
        "react/no-did-update-set-state": ["error", "disallow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": [
            "warn",
            {
                ignoreStateless: true,
            },
        ],
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "error",
        "react/no-unstable-nested-components": [
            "error",
            {
                allowAsProps: true,
            },
        ],
        "react/no-unused-prop-types": "warn",
        "react/no-unused-state": "warn",
        "react/no-will-update-set-state": ["error", "disallow-in-func"],
        "react/prefer-es6-class": ["error", "always"],
        "react/prefer-read-only-props": "off",
        "react/prefer-stateless-function": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "warn",
        "react/require-default-props": "warn",
        "react/require-optimization": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "off",
        "react/sort-prop-types": "warn",
        "react/state-in-constructor": ["error", "never"],
        "react/static-property-placement": ["error", "static public field"],
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    }
};