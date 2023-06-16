const productViewScreen = require("../screens/productView.screen")

describe('Products List', () => {
    // beforeEach(async () => {
    //     // verificar se o app já está instalado e executando
    //     let state = await driver.queryAppState("br.art.ebaconline")
    //     if (state !== 4) {
    //         await driver.launchApp()
    //     }
    // })

    // afterEach(async () => {
    //     // fechar app
    //     await driver.closeApp()
    // })

    it('should list products', async () => {
        expect(await productViewScreen.waitProduct('Ingrid')).toExist()
        expect(await productViewScreen.productList()).toBeElementsArrayOfSize(10)
    })
})