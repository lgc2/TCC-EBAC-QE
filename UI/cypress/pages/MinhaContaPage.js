/// <reference types="cypress" />

const minhaContaElements = require('./Elements/MinhaContaElements')

class MinhaContaPage {

    preencherInput(input, valor) {
        let seletorIpt
        input === "usuario" ? seletorIpt = minhaContaElements.iptLoginEmail() : seletorIpt = minhaContaElements.iptLoginPwd()

        cy.get(seletorIpt)
            .scrollIntoView()
            .clear()
            .type(valor, { force: true })

        cy.get(seletorIpt)
            .scrollIntoView()
            .should('be.visible')
            .and('have.value', valor)
    }

    submeterLogin() {
        cy.get(minhaContaElements.btnLogin())
            .scrollIntoView()
            .should('be.visible')
            .click()
    }

    validarAlertaLogin(mensagem) {
        cy.get(minhaContaElements.lblAlerta())
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', mensagem)
    }

    validarQueEstaLogadoNaPaginaMinhaConta(email) {
        const primeiraParteDoEmail = email.split('@')[0]

        cy.get(minhaContaElements.lblTituloMinhaConta())
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', 'Minha conta')

        cy.get(minhaContaElements.lblWelcome())
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', `Welcome ${primeiraParteDoEmail} !`)
    }
}

module.exports = new MinhaContaPage()