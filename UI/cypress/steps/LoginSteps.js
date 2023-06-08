const minhaContaPage = require('../pages/MinhaContaPage')

let input

Given(/^que acesse o site da EBAC-SHOP$/, () => {
	return true
})

And(/^posteriormente a página de login$/, () => {
	cy.visit(`${Cypress.env('baseUrl')}/minha-conta`)
})

When(/^eu inserir um usuário válido$/, () => {
	input = "usuario"
	minhaContaPage.preencherInput(input, Cypress.env('email'))
})

And(/^a senha correta$/, () => {
	input = "senha"
	minhaContaPage.preencherInput(input, Cypress.env('password'))
})

Then(/^farei login com sucesso$/, () => {
	minhaContaPage.submeterLogin()
})

And(/^serei redirecionado para a área logada da tela `minha-conta`$/, () => {
	minhaContaPage.validarQueEstaLogadoNaPaginaMinhaConta(Cypress.env('email'))
})

When(/^eu inserir o usuário "([^"]*)"$/, (email) => {
	input = "usuario"
	minhaContaPage.preencherInput(input, email)
})

And(/^a senha "([^"]*)"$/, (senha) => {
	input = "senha"
	minhaContaPage.preencherInput(input, senha)
})

Then(/^me será apresentada a mensagem: "([^"]*)"$/, (mensagem) => {
	minhaContaPage.submeterLogin()
	minhaContaPage.validarAlertaLogin(mensagem)
})
