class ProductViewScreen {

    get #products() {
        return $$(`-ios predicate string:name CONTAINS 'R$'`)
    }

    get #searchIcon() {
        return $(`-ios class chain:**/XCUIElementTypeButton[2]`)
    }

    get #searchTextField() {
        return $(`-ios predicate string:type == "XCUIElementTypeTextField"`)
    }

    get #searchBtn() {
        return $(`~Procurar`)
    }

    async waitProduct(name) {
        await $(`-ios predicate string:name CONTAINS '${name}'`).waitForDisplayed({ timeout: 15000 })
    }

    async product(name) {
        await this.waitProduct(name)
        return await $(`-ios predicate string:name CONTAINS '${name}'`)
    }

    async productList() {
        return await this.#products
    }

    async search() {
        await this.#searchIcon.waitForEnabled({ timeout: 10000 })
        await this.#searchIcon.click()
    }

    async searchBy(name) {
        await this.#searchTextField.waitForEnabled({ timeout: 10000 })
        await this.#searchTextField.setValue(name)
        await this.#searchBtn.click()
    }

    async clickOnProduct(name) {
        let productSelector = await this.product(name)
        await productSelector.click()
    }

    

}

module.exports = new ProductViewScreen()