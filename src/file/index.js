const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')
const { CP_DIRECTORY, IMAGES_MINIFIED_DIR } = require('../constants')

const minifyFile = (folder) =>
    imagemin([`${CP_DIRECTORY}/${folder.name}/*.{jpg,png}`], {
        destination: `${IMAGES_MINIFIED_DIR}/${folder.name}`,
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8],
            }),
        ],
    })

module.exports = { minifyFile }
