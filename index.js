#!/usr/bin/env node
const yargs = require('yargs')
const { minifyFiles } = require("./src/actions/minify");

yargs
    .command(
        'minify',
        'Minifies images',
        (args) => {
            args
                .positional('open', {
                    describe: 'open minified files in explorer',
                    default: true
                })
        },
        (args) => {
            const open = args.open === 'true';
            minifyFiles(open)
        }
    )
    .help()
    .argv
