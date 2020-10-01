const fs = require('fs')
const open = require('open');

const { startSpinner, stopSpinner } = require('../progress')
const { logInfo, logError } = require('../logger')
const { folders } = require('../../config.json')
const { minifyFile } = require('../file')

const { copyFolderSync } = require('../folder')
const { CP_DIRECTORY, IMAGES_MINIFIED_DIR } = require('../constants')

const minifyFiles = (openFolder) => {
    if (!fs.existsSync(CP_DIRECTORY)) {
        fs.mkdirSync(CP_DIRECTORY)
    }

    folders.forEach((item) => {
        copyFolderSync(item.name, item.dir)
    })

    const filesToMinify = [...folders.map((folder) => minifyFile(folder)), openFolder ? open(IMAGES_MINIFIED_DIR, {wait: true}) : Promise.resolve()]

    logInfo('Minifying..')
    startSpinner('Minifying...')

    Promise.all(filesToMinify)
        .then(() => {
            logInfo('Finished minifying..')
            stopSpinner()
        })
        .catch((err) => {
            logError(err)
            stopSpinner()
        })
}

module.exports = { minifyFiles }
