// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import * as cypress from "cypress"

Cypress.Commands.add("sign in", (email, password) => {
  cy.get('.login').click()
  cy.title().should("eq", "Login - My Store")  
  const uuid = () => Cypress._.random(0, 1e3)
  const id = uuid()
  const testmail = `przykładowymail${id}@test.com`
  cy.get('#email_create').type(testmail).should("have.value", testmail)
  
  

  return cy
})