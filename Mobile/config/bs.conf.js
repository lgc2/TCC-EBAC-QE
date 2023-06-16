require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{}]
} : {
    capabilities: [{
        "app": `bs://${process.env.IOS_APP_ID}`,
        "device": "iPhone 12 Pro",
        "os_version": "14",
        "project": "Automação iOS em Device Farm",
        "build": "EBAC Test iOS",
        "name": "ebac_test",
        'browserstack.debug': true
    }]
}

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ['browserstack']
}

module.exports = { bsConf }