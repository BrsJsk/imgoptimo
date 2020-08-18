#!/usr/bin/env node
const yargs = require('yargs')
const { minifyFiles } = require("./src/actions/minify");

yargs
    .command(
        'minify',
        'minifies images',
        () => {
            minifyFiles()
        }
    )
    .argv
