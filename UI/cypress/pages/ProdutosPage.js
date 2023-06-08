/// <reference types="cypress" />

const produtosElements = require('./Elements/ProdutosElements')
const productDatas = require('../fixtures/dadosProduto.json')

class ProdutosPage {

    _interceptarPostProduto() {
        cy.intercept({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/product/*`
        }).as('postProduct')
    }

    comprarProduto(tamanho, cor, quantidade) {
        this._interceptarPostProduto()

        cy.get(produtosElements.tamanhoProduto(tamanho)).click()
        cy.get(produtosElements.corProduto(cor)).click()
        cy.get(produtosElements.iptQuantidade()).clear().type(quantidade)
        cy.get(produtosElements.btnComprar()).click()

        cy.wait('@postProduct')
    }

    acessarPaginaDoCarrinho() {
        cy.get(produtosElements.btnVerCarrinho()).click()
    }

    validarIconeDeQuantidade(quantidade) {
        cy.get(produtosElements.iconeQuantidade())
            .should('be.visible')
            .and('contain', quantidade)
    }
}

module.exports = new ProdutosPage()