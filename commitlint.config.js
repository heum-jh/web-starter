module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-case": [0],
    "body-case": [0],
    "subject-case": [0],
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "ci", "perf", "build"]],
  },
};
