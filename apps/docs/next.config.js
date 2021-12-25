const withTM = require("next-transpile-modules")(["@meeu/material"]);

module.exports = withTM({
  reactStrictMode: true,
});
