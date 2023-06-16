class CartScreen {

    get #productInformation() {
        return $(`~Ingrid Running Jacket\nR$ 84.00`)
    }

    async getProductInformation() {
        await this.#productInformation.waitForDisplayed({ timeout: 15000 })
        return await this.#productInformation
    }
}

module.exports = new CartScreen()