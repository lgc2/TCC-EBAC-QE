const produtosPage = require('../pages/ProdutosPage')
const carrinhoPage = require('../pages/CarrinhoPage')
const dadosProduto = require('../fixtures/dadosProduto.json')
import homePage from '../pages/HomePage'

Given(/^que eu esteja na página do carrinho$/, () => {
    cy.visit(Cypress.env('baseUrl'))
    homePage.buscarProduto(dadosProduto.nomeProduto)
    produtosPage.comprarProduto(dadosProduto.tamanho, dadosProduto.cor, dadosProduto.quantidade)
    produtosPage.acessarPaginaDoCarrinho()
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