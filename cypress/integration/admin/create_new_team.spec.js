describe("avoid_error", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })

  it("creates manual delivery", () => {
    cy.loginAdmin("admin@example.com", "Secret00")
    cy.chooseTeam("Testy automatyczne").then(() => {
      cy.navigateMenuTo("Zespoły")
      cy.get(".m-subheader__title").should("contain", "Zespoły")
      // const teams_number = cy.get('.m-subheader__title').invoke('text') //PRÓBOWAŁEM ZROBIĆ WERYFIKACJE CZY ZMIENIA SIĘ NUMER ZESPOŁÓW PO DODANIU NOWEGO
      // console.log(teams_number)
      cy.get('a[href="/admin/teams/new"').click()
      cy.get(".m-subheader__title").should("have.html", "Nowy zespół")
      const uuid1 = () => Cypress._.random(0, 1e3)
      const id1 = uuid1()
      const testname = `${id1}`
      cy.get("#team_name").type("name" + testname)
      const uuid2 = () => Cypress._.random(0, 1e8)
      const id2 = uuid2()
      const number = `${id2}`
      cy.get("#team_contact_number").type("6" + number)
      cy.get(".team_order_size_fee_units").type("0")
      cy.get(".team_order_size_fee_cost").type("0")
      cy.get(".btn-warning").first().click()
    })
  })
})
