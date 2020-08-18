const fs = require('fs')
const { logError, logInfo } = require('./logger')
const { CP_DIRECTORY, IMAGES_MINIFIED_DIR } = require('./constants')

// delete directory recursively
fs.rmdir(CP_DIRECTORY, { recursive: true }, (err) => {
    if (err) {
        logError(err)
        throw err
    }

    logInfo(`${CP_DIRECTORY} is deleted!`)
})

fs.rmdir(IMAGES_MINIFIED_DIR, { recursive: true }, (err) => {
    if (err) {
        logError(err)
        throw err
    }

    logInfo(`${IMAGES_MINIFIED_DIR} is deleted!`)
})
