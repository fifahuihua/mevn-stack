// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 强制在块之前使用一致的空格
    "space-before-blocks": 0,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": 0,
    // 强制在圆括号内使用一致的空格
    "space-in-parens": 0,
    // 要求操作符周围有空格
    "space-infix-ops": 0,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
