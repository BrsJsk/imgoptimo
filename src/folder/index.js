const copydir = require('copy-dir')
const { CP_DIRECTORY } = require('../constants')

const copyFolderSync = (name, location) => {
    console.log(`Copying ${name} from ${location}`)

    copydir.sync(location, `${CP_DIRECTORY}/${name}`)
}

module.exports = { copyFolderSync }
