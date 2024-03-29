module.exports = {
  root: true,
  extends: ['@paralect/eslint-config', 'plugin:react-hooks/recommended'],
  rules: {
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'global-require': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-nested-ternary': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'prefer-destructuring': 'off',
    'react/no-unescaped-entities': 'off',
    'operator-linebreak': 'off',
    'no-shadow': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    indent: 'off',
    'arrow-parens': 0,
  },
};
