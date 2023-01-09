module.exports = {
  extends: [ 'airbnb-base', 'plugin:vue/recommended', 'prettier'],
  "parser": "vue-eslint-parser",
  "parserOptions": {
     "parser": "babel-eslint",
     "sourceType": "module"
  },
  plugins: ['import', 'prettier', 'jest', 'vue'],

  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest/globals": true
  },
  globals: {
  },
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
    }],
    'vue/max-attributes-per-line': 0, // collides with prettier
    'import/no-unresolved': 0, // collides with plugin-vue
    'import/extensions': 0
  }
}