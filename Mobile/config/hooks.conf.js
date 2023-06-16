let hooksConf = {
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await driver.takeScreenshot();
    },
    beforeSuite: async function () {
        // verificar se o app já está instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if (state !== 4) {
            await driver.launchApp()
        }
    },
    afterSuite: async function () {
        // fechar app
        await driver.closeApp()
    }
}

module.exports = { hooksConf }