require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    specs: []
} : {
    specs: [
        './test/specs/products.spec.js',
        './test/specs/search.spec.js',
        './test/specs/productBuyflow.spec.js'
    ]
}

module.exports = { specsConf }