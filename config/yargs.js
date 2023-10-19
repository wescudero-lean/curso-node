const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "this is the table base",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Show table in console",
  })
  .option("to", {
    alias: "t",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "show value product to",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "base cannot be a string";
    }
    if (isNaN(argv.to)) {
      throw "to cannot be a string";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
