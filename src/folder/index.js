const copydir = require('copy-dir')
const { logInfo } = require('../logger')
const { CP_DIRECTORY } = require('../constants')

/**
 * Copies folder from original to new location
 *
 * @param {string} name - Name of the folder
 * @param {string} location - Location path
 */
const copyFolderSync = (name, location) => {
    logInfo(`Copying ${name} from ${location}`)

    copydir.sync(location, `${CP_DIRECTORY}/${name}`)
}

module.exports = { copyFolderSync }
