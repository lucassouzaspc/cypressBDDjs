/// <reference types="cypress" />
// import { Given } from 'cypress-cucumber-preprocessor/steps';

import { LojaSauceDemo2 } from "../pages/lojaPage2";
const lojaSauceDemo2 = new LojaSauceDemo2()

// beforeEach(() => {
//     cy.visit('https://www.saucedemo.com/ ')
// })

Given('que eu acesso a pagina saucedemo 2', function () {
    cy.visit('https://www.saucedemo.com/ ')
})


When('realizo login usuario {string} {string} 2', function (user) {
    lojaSauceDemo2.login(user, 'secret_sauce')
})

Then('verifico o usuario logado 2', function () {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})


Given('verifico a mensagem de validacao {string} 2', function (mensagem)  {
    cy.get('.error-message-container').should('be.visible').should('have.text', mensagem)
})
