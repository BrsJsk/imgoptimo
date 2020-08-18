const fs = require("fs");
const { CP_DIRECTORY, IMAGES_MINIFIED_DIR } = require("./constants");

// delete directory recursively
fs.rmdir(CP_DIRECTORY, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${CP_DIRECTORY} is deleted!`);
});

fs.rmdir(IMAGES_MINIFIED_DIR, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${IMAGES_MINIFIED_DIR} is deleted!`);
});
