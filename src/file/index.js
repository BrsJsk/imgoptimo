const imagemin = require('imagemin')
const imageminJpegoptim = require('imagemin-jpegoptim')
const imageminPngquant = require('imagemin-pngquant')
const { CP_DIRECTORY, IMAGES_MINIFIED_DIR } = require('../constants')

/**
 * Minifies a file
 *
 * @param folder
 * @returns {Promise<unknown[]>}
 */
const minifyFile = (folder) =>
    imagemin([`${CP_DIRECTORY}/${folder.name}/*.{jpg,png}`], {
        destination: `${IMAGES_MINIFIED_DIR}/${folder.name}`,
        plugins: [
            imageminJpegoptim({
                max: 75,
            }),
            imageminPngquant({
                quality: [0.6, 0.8],
            }),
        ],
    })

module.exports = { minifyFile }
