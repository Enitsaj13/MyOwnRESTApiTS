import tseslint from 'typescript-eslint';

export default [
  { files: ['src/**/*.{ts,tsx}'] },
  ...tseslint.configs.recommended,
];
