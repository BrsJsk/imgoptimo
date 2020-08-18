const copydir = require('copy-dir')
const { logInfo } = require('../logger')
const { CP_DIRECTORY } = require('../constants')

const copyFolderSync = (name, location) => {
    logInfo(`Copying ${name} from ${location}`)

    copydir.sync(location, `${CP_DIRECTORY}/${name}`)
}

module.exports = { copyFolderSync }
