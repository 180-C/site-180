export default {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss"
  ],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      {
        // include tailwind @-rules
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "reference",
          "theme",
          "utility"
        ]
      }
    ],
    "no-invalid-position-at-import-rule": [
      true,
      {
        // include tailwind @-rules
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "reference",
          "theme",
          "utility"
        ]
      }
    ],
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "no-descending-specificity": null,
    "import-notation": "string"
  }
} 