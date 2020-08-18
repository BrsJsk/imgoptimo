const fs = require('fs')
const { startSpinner, stopSpinner } = require('./src/progress')
const { logInfo, logError } = require('./src/logger')
const { folders } = require('./config.json')
const { minifyFile } = require('./src/file')

const { copyFolderSync } = require('./src/folder')
const { CP_DIRECTORY } = require('./src/constants')

if (!fs.existsSync(CP_DIRECTORY)) {
    fs.mkdirSync(CP_DIRECTORY)
}

folders.forEach((item) => {
    copyFolderSync(item.name, item.dir)
})

const filesToMinify = folders.map((folder) => minifyFile(folder))

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
