// eslint.config.js
export default [{
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
            window: "readonly",
            document: "readonly",
            fetch: "readonly",
            console: "readonly"
        }
    },
    rules: {
        // Algumas regras básicas recomendadas
        "no-unused-vars": "warn",
        "no-undef": "error",
        "semi": ["error", "always"]
    }
}];