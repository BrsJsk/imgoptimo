const ora = require('ora')

const spinner = ora('Loading...')

/**
 * Shows spinner
 *
 * @param {string} message - Message to display inside loader
 */
const startSpinner = (message) => {
    spinner.text = message
    spinner.start()
}

/**
 * Stops spinner
 *
 */
const stopSpinner = () => {
    spinner.stop()
}

module.exports = { startSpinner, stopSpinner }
