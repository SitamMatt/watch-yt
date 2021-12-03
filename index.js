#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { setup, watch } from "./commands.js";

yargs(hideBin(process.argv))
  .command(
    "watch <source>",
    "Launches browser with specified youtube url",
    () => {},
    async (argv) => await watch(argv.source)
  )
  .command(
    "setup",
    "Allows user to configure browser profile (login, autoplay, i.e.)",
    () => {},
    async () => await setup()
  )
  .parse();
