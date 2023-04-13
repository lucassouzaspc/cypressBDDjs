/// <reference types="cypress" />
// import { Given } from 'cypress-cucumber-preprocessor/steps';

import { LojaSauceDemo } from "../pages/lojaPage";
const lojaSauceDemo = new LojaSauceDemo()

// beforeEach(() => {
//     cy.visit('https://www.saucedemo.com/ ')
// })

Given('que eu acesso a pagina saucedemo', function () {
    cy.visit('https://www.saucedemo.com/ ')
})


When('realizo login usuario {string} {string}', function (user) {
    lojaSauceDemo.login(user, 'secret_sauce')
})

Then('verifico o usuario logado', function () {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})


Given('verifico a mensagem de validacao {string}', function (mensagem)  {
    cy.get('.error-message-container').should('be.visible').should('have.text', 'mensagem')
})
