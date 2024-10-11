module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "feat", "fix", "ci", "test", "documentation"],
    ],
    "scope-enum": [2, "always", ["client", "server", "all"]],
    "scope-case": [2, "always", "lower-case"],
    "type-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],
    "header-max-length": [2, "always", 72],
  },
};
