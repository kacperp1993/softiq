describe("avoid_error", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })

  it("creates manual delivery", () => {
    cy.loginAdmin("admin@example.com", "Secret00")
    cy.chooseTeam("Testy automatyczne").then(() => {
      cy.navigateMenuTo("Zlecenia")
      cy.get('a[href="/admin/orders/new"').click()
      cy.get(".m-subheader__title").should("have.html", "Nowe zlecenie manualne")
      cy.get("#order_order_kind_delivery").click({ force: true })
      cy.get("#next-btn").click()
      cy.get("#spop--top-right").should("be.visible")
      const uuid = () => Cypress._.random(0, 1e2)
      const id = uuid()
      const testname = `zamówienie${id}`
      cy.get("#select2-order_delivery_attributes_name-container").type(testname)
      cy.get(".select2-results")
        .contains(testname)
        .then(() => {
          cy.get(".select2-search__field").type("{enter}")
          const uuid1 = () => Cypress._.random(0, 1e8)
          const id1 = uuid1()
          const number = `${id1}`
          cy.get("#order_delivery_attributes_phone").type("5" + number)
          cy.get("#order_delivery_attributes_address").type("Szlak 1 Kraków, Polska")
          cy.get(".pac-container .pac-item")
            .should("be.visible")
            .then(() => {
              cy.get(".pac-container .pac-item").click()
              cy.get("#next-btn").click()
              cy.get("#spop--top-right").should("be.visible")
              cy.get(".form-group .m-option").contains("Zapłacone").click({ force: true })
              cy.get("#order_price").type("{backspace}").type("50")
              cy.get("#next-btn").click()
              cy.get("#spop--top-right").should("be.visible")
              cy.get("#order_packages_big-pizza").type("1").should("have.value", "1")
              cy.get("#order_packages_standard-dish").type("1").should("have.value", "1")
              cy.get("#order_packages_own-packaging").type("1").should("have.value", "1")
              cy.get("#order_client_comment_attributes_description").should("be.enabled")
              cy.get("#order_customer_comment_attributes_description").should("be.enabled")
              cy.get("#order_order_comment_attributes_description").should("be.enabled")
              cy.get("#next-btn").click()
              cy.get("#spop--top-right").should("be.visible")
              cy.get(".btn-primary").click()
              cy.get(".m-subheader__title").should("have.html", "Zlecenia")
            })
        })
    })
  })
})
