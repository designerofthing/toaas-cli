#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
  .usage("Usage: toaas -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name (used to greet you)",
    type: "string",
    demandOption: true
  })
  .argv;

console.log(`Here's a random Thomas Ochman quote to inspire you ${options.name}:`);

const url = "https://toaas.herokuapp.com/quotes";

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    console.log(res.data.quotes.quote);
  });
