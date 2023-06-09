const produtosPage = require('../pages/ProdutosPage')
const carrinhoPage = require('../pages/CarrinhoPage')
const dadosProduto = require('../fixtures/dadosProduto.json')
import homePage from '../pages/HomePage'

let quantidadeItens

Given(/^que eu esteja na página do carrinho$/, () => {
    cy.visit(Cypress.env('baseUrl'))
    homePage.buscarProduto(dadosProduto.nomeProduto)
    produtosPage.comprarProduto(dadosProduto.tamanho, dadosProduto.cor, dadosProduto.quantidade)
    produtosPage.acessarPaginaDoCarrinho()
})

When(/^eu inserir "([^"]*)" itens de um mesmo produto no carrinho$/, (quantidade) => {
    quantidadeItens = quantidade
    carrinhoPage.adicionarItensProduto(quantidade)
})

Then(/^a quantidade apresentada na coluna “Quantity” será atualizada$/, () => {
    return true
})

And(/^os valores também serão atualizados de acordo com a nova quantidade de itens informada$/, () => {
    carrinhoPage.validarValoresPaginaCarrinho(quantidadeItens, dadosProduto.valorUnitario)
})

When(/^eu inserir itens ao carrinho, totalizando um valor menor do que RS 200,00$/, () => {
    quantidadeItens = 2
    const valorReferencia = 200
    carrinhoPage.adicionarItensProduto(quantidadeItens)
    carrinhoPage.validarValorMenorQue(valorReferencia)
})

Then(/^o sistema não me dará um cupom de desconto$/, () => {
    return true
})

And(/^verei o valor cheio na página do carrinho$/, () => {
    carrinhoPage.validarValoresPaginaCarrinho(quantidadeItens, dadosProduto.valorUnitario)
})