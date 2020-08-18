const ora = require('ora')

const spinner = ora('Loading...')

const startSpinner = (message) => {
    spinner.text = message
    spinner.start()
}

const stopSpinner = () => {
    spinner.stop()
}

module.exports = { startSpinner, stopSpinner }
