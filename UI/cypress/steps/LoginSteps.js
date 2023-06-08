const myAccountPage = require('../pages/MinhaContaPage')
const productDatas = require('../fixtures/productDatas.json')

Given(/^que acesse o site da EBAC-SHOP$/, () => {
	cy.visit(Cypress.env('baseUrl'))
})

And(/^posteriormente a página de login$/, () => {
	return true
})

When(/^eu inserir um usuário válido$/, () => {
	return true
})

And(/^a senha correta$/, () => {
	return true
})

Then(/^farei login com sucesso$/, () => {
	return true
})

And(/^serei redirecionado para a tela `minha-conta`$/, () => {
	return true
})

When(/^eu inserir o usuário "([^"]*)"$/, (usuario) => {
	return true
})

And(/^a senha "([^"]*)"$/, (senha) => {
	return true
})

Then(/^me será apresentada a mensagem: "([^"]*)"$/, (mensagem) => {
	return true
})
