import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "vue/order-in-components": "off",
      "vue/html-indent": "off",
      "vue/component-definition-name-casing": "off",
      "vue/no-unused-components": "off",
      "vue/html-self-closing": "off",
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
