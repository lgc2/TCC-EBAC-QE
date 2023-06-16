class ProductAddScreen {

    get #addToCartBtn() {
        return $(`~Adicionar ao carrinho`)
    }

    get #selectSize() {
        return $(`~Size\nSelecione uma Size`)
    }

    get #size() {
        return $(`~L`)
    }

    get #selectColor() {
        return $(`~Color\nSelecione uma Color`)
    }

    get #color() {
        return $(`~Orange`)
    }

    async clickOnAddProductBtn() {
        await this.#addToCartBtn.waitForDisplayed({ timeout: 15000 })
        await this.#addToCartBtn.click()
    }

    async selectProductSize() {
        await this.#selectSize.waitForDisplayed({ timeout: 15000 })
        await this.#selectSize.click()

        await this.#size.click()
    }

    async selectProductColor() {
        await this.#selectColor.waitForDisplayed({ timeout: 15000 })
        await this.#selectColor.click()

        await this.#color.click()
    }

}

module.exports = new ProductAddScreen()