describe("avoid_error", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false
    })
  
    it("green path test", () => {      
      cy.visit('http://automationpractice.com/index.php')
      cy.viewport(1920, 1080)
      cy.title().should("eq", "My Store")
      cy.get('.login').click()
      cy.title().should("eq", "Login - My Store")  
      const uuid = () => Cypress._.random(0, 1e3)
      const id = uuid()
      const testmail = `przykładowymail${id}@test.pl`
      cy.get('#email_create').type(testmail).should("have.value", testmail)
      cy.get('.form-ok').should('be.visible')

    })
  })
  