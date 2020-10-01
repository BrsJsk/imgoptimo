const winston = require('winston')

const {
    format: { combine, timestamp, prettyPrint },
} = winston

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), prettyPrint()),
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
})

/**
 * Logs info message
 *
 * @param {string} message
 */
const logInfo = (message) => {
    logger.info(message)
}

/**
 * Logs error message
 *
 * @param {string} message
 */
const logError = (message) => {
    logger.error(message)
}

module.exports = { logInfo, logError }
