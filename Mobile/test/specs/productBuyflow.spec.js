const productViewScreen = require("../screens/productView.screen")
const productAddScreen = require("../screens/productAdd.screen")
const cartScreen = require("../screens/cart.screen")

describe('Product Buy', () => {

    it('should buy a product', async () => {
        let productName = "Ingrid"

        await productViewScreen.clickOnProduct(productName)

        await productAddScreen.clickOnAddProductBtn()

        await productAddScreen.selectProductSize()
        await productAddScreen.selectProductColor()
        await productAddScreen.clickOnAddProductBtn()

        expect(await cartScreen.getProductInformation()).toExist()
        expect(await cartScreen.getProductInformation()).toHaveText('Ingrid Running Jacket\nR$ 84.00')
    })
})