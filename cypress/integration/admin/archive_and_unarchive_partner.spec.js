describe("avoid_error", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })

  it("creates partner", () => {
    cy.loginAdmin("admin@example.com", "Secret00")
    cy.chooseTeam("Testy automatyczne")
    cy.navigateMenuTo("Klienci")
    cy.get('a[href="/admin/partners/new"').click()
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `partnersname${id}`
    cy.get("#partner_first_name").type(testname).should("have.value", testname)
    const uuid1 = () => Cypress._.random(0, 1e6)
    const id1 = uuid1()
    const testname1 = `partnerslastname${id1}`
    cy.get("#partner_last_name").type(testname1).should("have.value", testname1)
    const uuid2 = () => Cypress._.random(0, 1e6)
    const id2 = uuid2()
    const displayname = `name${id2}`
    cy.get("#partner_display_name").type(displayname).should("have.value", displayname)
    // const uuid3 = () => Cypress._.random(0, 1e6)
    // const id3 = uuid3()
    // const mail = `mail${id3}@gmail.com`
    cy.get("#partner_email").type("spam.deligoo@gmail.com").should("have.value", "spam.deligoo@gmail.com")
    const uuid4 = () => Cypress._.random(0, 1e8)
    const id4 = uuid4()
    const number = `${id4}`
    cy.get("#partner_phone").type("5" + number)
    cy.get("#next-btn").click()
    cy.get("#next-btn").click()
    cy.get("#next-btn").click()
    cy.get("#generatePasswordButton").click()
    cy.get("#next-btn").click()
    cy.get("button[type=submit]").click({ force: true })
    cy.get(".m-subheader__title", { timeout: 10000 }).should("have.html", "Klienci")
    cy.get("tr")
      .contains(displayname)
      .parent()
      .invoke("text")
      .then((text) => {
        const ID = text.slice(text.indexOf("ID: ") + 4).trim()
        console.log(ID)
        cy.get(".text-truncate").contains(displayname).rightclick()
        cy.get('a[href="/admin/partners/' + ID + '/edit"')
          .contains("Edytuj dane")
          .click()
        cy.get(".m-subheader__title").should("have.html", "Edycja")
        cy.get('[data-original-title="Wyłącz"]').click({ force: true })
        cy.get("#spop--top-right").contains("Partner wyłączony").should("be.visible")
        cy.get("#partners_active_in").click()
        // cy.get('.text-truncate').contains(displayname).rightclick()
        cy.get('a[href="/admin/partners/' + ID + '/edit"')
          .contains("Edytuj dane")
          .click({ force: true })
        cy.get(".m-subheader__title").should("have.html", "Edycja")
        cy.get('[data-original-title="Włącz"]').click({ force: true })
        cy.get(".m-subheader__title").should("have.html", "Klienci")
        cy.get("#spop--top-right").contains("Partner włączony").should("be.visible")
        // cy.get('.text-truncate').contains(displayname).rightclick()
        cy.get('a[href="/admin/partners/' + ID + '/events"')
          .contains("Eventy")
          .click({ force: true })
        cy.get(".m-subheader__title").should("have.html", "Zdarzenia klienta")
        cy.get(".m-timeline-1__item-title")
          .contains("Klient został zarchiwizowany przez administratora")
          .should("be.visible")
        cy.get(".m-timeline-1__item-title").contains("Aktywowano klienta").should("be.visible")
      })
  })
})