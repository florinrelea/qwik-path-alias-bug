module.exports = {
  extends: [
    "../../qwik-eslintrc.cjs"
  ],
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      parserOptions: {
        project: "libs/qwik-components/tsconfig.json"
      }
    }
  ]
}

