const { bsConf } = require('./bs.conf')

require('dotenv').config()

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return {}
        case 'browserstack': default:
            return bsConf
        case 'saucelabs':
            return {}
    }
}

exports.config = getConfig()