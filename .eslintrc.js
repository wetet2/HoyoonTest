module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: `react-app`,
  rules: {
    "no-anonymous-exports-page-templates": 0,
    "limited-exports-page-templates": 0,
  },
};
