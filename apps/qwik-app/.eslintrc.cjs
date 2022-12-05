module.exports = {
  extends: [
    "../../qwik-eslintrc.cjs"
  ],
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      parserOptions: {
        project: "apps/landing-page/tsconfig.json"
      }
    }
  ]
}

