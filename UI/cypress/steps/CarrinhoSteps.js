const myAccountPage = require('../pages/MinhaContaPage')
const productsPage = require('../pages/ProdutosPage')
const productElements = require('../pages/Elements/ProdutosElements')
const cartPage = require('../pages/CarrinhoPage')
const productDatas = require('../fixtures/productDatas.json')
import {
    After, Given
} from 'cypress-cucumber-preprocessor/steps'

After({ tags: '@cartClear' }, () => {
    cy.intercept({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/wp-admin/admin-ajax.php`
    }).as('cartClear')

    cy.get('.dropdown-toggle > .mini-cart-items')
        .click()

    cy.get('#cart .remove')
        .click()

    cy.wait('@cartClear')
        .its('response.statusCode')
        .should('equal', 200)
})



Given(/^que eu esteja na página do carrinho$/, () => {
    cy.visit(Cypress.env('baseUrl'))
})

When(/^eu inserir 10 itens de um mesmo produto no carrinho$/, () => {
    return true
})

Then(/^a quantidade apresentada na coluna “Quantity” será atualizada$/, () => {
    return true
})

And(/^os valores também serão atualizados de acordo com a nova quantidade de itens informada$/, () => {
    return true
})

When(/^eu inserir itens ao carrinho, totalizando um valor menor do que RS 200,00$/, () => {
    return true
})

Then(/^o sistema não me dará um cupom de desconto$/, () => {
    return true
})

And(/^verei o valor cheio na página do carrinho$/, () => {
    return true
})

// When(/^I click on the "([^"]*)" product$/, (args1) => {
//     productsPage.accessProductPagAnd(args1)
// })

// And(/^click the Buy button, after choose the size, color and quantity$/, () => {
//     productsPage.buyAProduct(productDatas.size, productDatas.color, productDatas.quantity)
// })

// Then(/^the product will be added to the cart$/, () => {
//     return true
// })

// And(/^I have added a product to cart$/, () => {
//     myAccountPage.accessProductsPagAnd()
//     productsPage.accessProductPagAnd(productDatas.productNameInCheckoutPage)
//     productsPage.buyAProduct(productDatas.size, productDatas.color, productDatas.quantity)
// })

// When(/^I access the cart page$/, () => {
//     productsPage.accessTheCartPagAnd()
// })

// And(/^remove this product$/, () => {
//     cartPage.removeProductIntheCartPagAnd()
// })

// Then(/^the cart will be empty$/, () => {
//     cartPage.removedProductMessageValidation(productDatas.productNameInCheckoutPage)
// })

// When(/^add one more item$/, () => {
//     cartPage.addOneMoreIten(productDatas.quantity)
// })

// Then(/^the cart will have two itens$/, () => {
//     const newItensQuantity = productDatas.quantity + 1
//     productsPage.quantityIconValidation(newItensQuantity)
// })