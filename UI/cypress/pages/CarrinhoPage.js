/// <reference types="cypress" />

const carrinhoElements = require('./Elements/CarrinhoElements')
class CarrinhoPage {

    adicionarItensProduto(quantidade) {
        this._interceptarUpdateDeQuantidadeDeProduto()
        this._interceptarReqAtualizacaoCarrinho()

        cy.get(carrinhoElements.iptQuantidade())
            .scrollIntoView()
            .clear()
            .type(quantidade)
            .type('{enter}')

        cy.wait('@updateProduto')
        cy.wait('@atualizacaoCarrinho')

        cy.get(carrinhoElements.iptQuantidade())
            .scrollIntoView()
            .should('be.visible')
            .and('have.value', quantidade)
    }

    validarValoresPaginaCarrinho(quantidade, valorUnitario) {
        const valorTotal = quantidade * valorUnitario

        cy.get(carrinhoElements.lblValorTotalProduto())
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', `R$${this._formatarValorParaReal(valorTotal)}`)

        cy.get(carrinhoElements.lblValorTotalPedido())
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', `R$${this._formatarValorParaReal(valorTotal)}`)
    }

    validarValorMenorQue(valorReferencia) {
        cy.get(carrinhoElements.lblValorTotalProduto())
            .invoke('text')
            .then((valorStr) => {
                let textoExtraido = valorStr
                let valorSemSimboloMoeda = textoExtraido.substring(2)
                let valorStrParaNumber = parseFloat(valorSemSimboloMoeda.replace(',', '.'))

                expect(valorStrParaNumber).lessThan(valorReferencia)
            })
    }

    _interceptarUpdateDeQuantidadeDeProduto() {
        cy.intercept({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/carrinho/`
        }).as('updateProduto')
    }

    _interceptarReqAtualizacaoCarrinho() {
        cy.intercept({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/?wc-ajax=get_refreshed_fragments`
        }).as('atualizacaoCarrinho')
    }

    _formatarValorParaReal(valorNumber) {
        const valorReal = valorNumber.toLocaleString('pt-br', { minimumFractionDigits: 2 })
        return valorReal
    }
}

module.exports = new CarrinhoPage()