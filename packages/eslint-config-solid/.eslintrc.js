module.exports = {
    plugins: [
        "solid",
    ],
    rules: {
        "solid/components-return-once": "off",
        "solid/event-handlers": ["warn", {
            ignoreCase: false, 
        }],
        "solid/jsx-no-duplicate-props": ["error", { 
            ignoreCase: false, 
        }],
        "solid/jsx-no-script-url": "error",
        "solid/jsx-no-undef": ["error", { 
            allowGlobals: false,
            autoImport: true,
            typescriptEnabled: true, 
        }],
        "solid/jsx-uses-vars": "error",
        "solid/no-destructure": "warn",
        "solid/no-innerhtml": "error",
        "solid/no-react-specific-props": "warn",
        "solid/no-unknown-namespaces": "error",
        "solid/prefer-classlist": "warn",
        "solid/prefer-for": "warn",
        "solid/prefer-show": "warn",
        "solid/reactivity": "warn",
        "solid/self-closing-comp": ["warn", { 
            component: "all",
            html: "void",
        }],
        "solid/style-prop": ["warn", { 
            styleProps: [],
            allowString: false, 
        }]
    }
};