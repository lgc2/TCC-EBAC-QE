/// <reference types="cypress" />

const homeElements = require('./Elements/HomeElements')

class HomePage {

    buscarProduto(nomeProduto) {
        this._interceptarReqBuscaProduto()

        cy.get(homeElements.btnBusca()).scrollIntoView().click()
        cy.get(homeElements.iptBuscaProduto())
            .eq(2)
            .scrollIntoView()
            .clear()
            .type(nomeProduto)
        cy.wait('@buscaProduto')
        cy.get(homeElements.iptBuscaProduto()).eq(2).type('{enter}')
    }

    _interceptarReqBuscaProduto() {
        cy.intercept({
            method: 'GET',
            url: `${Cypress.env('baseUrl')}/wp-admin/admin-ajax.php*`
        }).as('buscaProduto')
    }

}

module.exports = new HomePage()