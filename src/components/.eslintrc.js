module.exports = exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": "react-app",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "space-in-parens": [
      "warn",
      "always"
    ],
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "indent": [
        "warn",
        2
    ],
    "linebreak-style": [
        "warn",
        "unix"
    ],
    "quotes": [
        "warn",
        "single"
    ],
    "semi": [
        "warn",
        "never"
    ]
  }
}
