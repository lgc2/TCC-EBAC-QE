const productViewScreen = require("../screens/productView.screen")

describe('Search products', () => {
    it('should search by product name', async () => {
        let searchName = 'Ingrid'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(searchName)

        expect(await productViewScreen.product(searchName)).toExist()

    })
})