const { LOGS_FILE, ERROR_LOGS_FILE } = require('../constants/index')
const open = require('open')

const openLogs = (errorsOnly) => {
    const fileToOpen = errorsOnly ? ERROR_LOGS_FILE : LOGS_FILE
    open(fileToOpen)
}

module.exports = { openLogs }
