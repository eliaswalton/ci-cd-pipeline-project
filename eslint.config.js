import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        module: 'writable',
        require: 'readonly',
        exports: 'writable',
        __dirname: 'readonly',
        __filename: 'readonly',
      }
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      }
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  }
];