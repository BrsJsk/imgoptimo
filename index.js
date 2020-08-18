const fs = require('fs')
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
console.log('starting')
Promise.all(filesToMinify)
    .then(() => {
        console.log('done')
    })
    .catch((err) => console.log(err))
