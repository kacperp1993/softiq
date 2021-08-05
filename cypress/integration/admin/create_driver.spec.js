describe("avoid_error", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })

  it("creates driver", () => {
    cy.loginAdmin("admin@example.com", "Secret00")
    cy.chooseTeam("Testy automatyczne").then(() => {
      cy.navigateMenuTo("Kurierzy")
      cy.get('a[href="/admin/drivers/new"').click()
      const uuid = () => Cypress._.random(0, 1e3)
      const id = uuid()
      const testname = `Driversname${id}`
      cy.get("#driver_first_name").type(testname).should("have.value", testname)
      const uuid1 = () => Cypress._.random(0, 1e3)
      const id1 = uuid1()
      const testname1 = `Driverslastname${id1}`
      cy.get("#driver_last_name").type(testname1).should("have.value", testname1)
      // const uuid2 = () => Cypress._.random(0, 1e6)
      // const id2 = uuid2()
      // const testname2 = `driversmail${id2}`
      cy.get("#driver_email").type("spam.deligoo@gmail.com").should("have.value", "spam.deligoo@gmail.com")
      const uuid3 = () => Cypress._.random(0, 1e8)
      const id3 = uuid3()
      const number = `${id3}`
      cy.get("#driver_phone").type("5" + number)
      cy.get("#next-btn").click()
      cy.get("#generatePasswordButton").click()
      cy.get("#next-btn").click()
      // cy.get('#driver_petrol_return_rate').type('10')
      cy.get("#driver_transport_type_car").click({ force: true })
      cy.get("#driver_transport_own_car").click({ force: true })
      cy.get("#driver_distance_kind_google").click({ force: true })
      cy.get("#next-btn").click()
      cy.get("#driver_contract_type_mandate").click({ force: true })
      cy.get("#driver_insurance_type_student").click({ force: true })
      // cy.get('#driver_birth_date').click().then(input => {
      //     input[0].dispatchEvent(new Event('input', { bubbles: true }))
      //      input.val('1990-10-10')
      // })
      cy.get("#driver_birth_date").click()
      // Cypress._.times(100, (k) => {
      //     it(`typing hello ${k + 1} / 100`, () => {
      //         cy.get('.datepicker-days .prev').click()
      //     })
      // })
      cy.get(".table .day").contains("5").click()
      cy.get("#driver_wage").type("25")
      cy.get("#next-btn").click()
      cy.get("#next-btn").click()
      cy.get(".btn-primary").click()
    })
  })
})
