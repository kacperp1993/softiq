describe("avoid_error", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })

  it("creating localization", () => {
    cy.loginAdmin("admin@example.com", "Secret00")
    cy.chooseTeam("Testy automatyczne").then(() => {
      cy.navigateMenuTo("Lokalizacje")
      cy.get('a[href="/admin/clients/new"').click()
      const uuid1 = () => Cypress._.random(0, 1e4)
      const id1 = uuid1()
      const name = `TEST${id1}`
      cy.get("#client_first_name").type(name)
      cy.get("#client_phone").type("698395996")
      cy.get("#select2-client_partner_id-container").click()
      cy.get("#client_partner_id").select("Automatyczny Klient", {
        force: true,
      })
      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
      const testname = `testname${id}`
      cy.get("#client_username").type(testname)
      cy.get("#next-btn").click()
      cy.get("#client_full_address").type("Szlak 1, Kraków, Polska")
      cy.get(".pac-item-query").click({ force: true })
      cy.get("#client_city").type("Kraków")
      cy.get("#next-btn").click()
      cy.get("#next-btn").click()
      cy.get("#client_order_management_kind").select("Dodawanie i przyjmowanie zleceń", { force: true })
      cy.get(".m-option__title").contains("Portal uruchomiony").click()
      cy.get(".m-option__title").contains("Obsługiwanie rowerów").click()
      cy.get(".m-option__title").contains("Obsługiwanie skuterów").click()
      cy.get(".m-option__title").contains("Obsługiwanie samodzielnych dostaw").click()
      cy.get("#next-btn").click()
      cy.get("#client_start_time_options").type("07:00")
      cy.get("#client_end_time_options").type("22:00")
      cy.get(".my-2 .btn-primary").click()
      cy.get("#next-btn").click()
      cy.get("#client_billing_setting_attributes_base_initial_price").type("0")
      cy.get("#client_distance_pricings_attributes_0_to").type("10")
      cy.get("#client_distance_pricings_attributes_0_value").type("5")
      cy.get("#client_distance_pricings_attributes_0_kind").select("Za strefę")
      cy.get("#next-btn").click()
      cy.get(".m-form__actions .btn-primary ").click()
      cy.title().should("be.equal", "Testy automatyczne | Deligoo | Panel Administracyjny")
    })
  })
})
