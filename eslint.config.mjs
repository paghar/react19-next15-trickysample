import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    extends: [
      "next/core-web-vitals", 
      "next/typescript",
      "eslint:recommended",
      "next", 

      "plugin:@typescript-eslint/recommended",  
      "plugin:@typescript-eslint/stylistic",
      "plugin:@typescript-eslint/strict",

      "plugin:react/recommended",
      "plugin:react-hooks/recommended",      
    ],
    rules: {  
      "linebreak-style": ["error", "unix"] , 
      "indent": ["error", 2],
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": ["error"],
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          "allowSingleExtends": true,
        },
      ],    
      "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
      "no-extra-semi": "error",     
      "@typescript-eslint/prefer-enum-initializers": "error",   
      "object-curly-spacing": ["error", "always"],      
      "semi": ["error", "always"],  
      "@typescript-eslint/no-unused-expressions": "off",
      "import/extensions" : "off",
      "import/no-extraneous-dependencies" : "off",
      "import/no-unresolved": "off",  
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "error",
      "no-case-declarations": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/ban-types": "off",
      "no-fallthrough": "off",
      "@typescript-eslint/no-var-requires": "off",
      "no-async-promise-executor": "off",
      "no-prototype-builtins": "off",
      "prefer-rest-params": "off",
      "no-useless-escape": "off",
      "no-empty-pattern": "off",
      "prefer-const": "warn",
      "no-useless-catch": "warn",
      "react/no-direct-mutation-state": "warn",
      "react/prop-types": "off",
      "no-var": "warn",
      "no-compare-neg-zero": "warn",
      "react/no-deprecated": "warn",
      "no-extra-boolean-cast": "off",
      "no-irregular-whitespace": "off",
      "@typescript-eslint/no-array-constructor": "off",
      "react/react-in-jsx-scope": "off",
      "max-len": [2, { code: 200, ignoreComments: true }],
      "no-console": "warn",
      "prefer-template": "error",
      "no-unexpected-multiline": "error",  
      "@typescript-eslint/quotes": "off",
      "quotes": ["error", "double", { "allowTemplateLiterals": true }],
      "no-use-before-define":["error", {
        "functions": true,
        "classes": true,
        "variables": true,
      }],
      
    },
  }),
];

export default eslintConfig;
