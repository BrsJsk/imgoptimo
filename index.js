#!/usr/bin/env node
const yargs = require('yargs')
const { openLogs } = require('./src/logger/openLogs')
const { minifyFiles } = require('./src/actions/minify')

yargs
    .command(
        'minify',
        'Minifies images',
        (args) => {
            args.positional('open', {
                describe: 'open minified files in explorer',
                default: true,
            })
        },
        (args) => {
            const open = typeof args.open === 'boolean' ? args.open : args.open === 'true'
            minifyFiles(open)
        }
    )
    .command(
        'open-logs',
        'Opens logs file',
        (args) => {
            args.positional('errorsOnly', {
                describe: 'open only errors log file',
                default: false,
            })
        },
        (args) => {
            const errorsOnly = typeof args.errorsOnly === 'boolean' ? args.errorsOnly : args.errorsOnly === 'true'
            openLogs(errorsOnly)
        }
    )
    .help().argv
