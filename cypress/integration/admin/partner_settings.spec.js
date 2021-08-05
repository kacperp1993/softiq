describe("avoid_error", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })

  it("creates partner", () => {
    cy.loginPartner("kacper.piiiak@gmail.com", "Secret00!")
    cy.get(".m-nav__link-text").contains("TEST").click({ force: true })
    cy.get(".m-portlet__head-text").contains("Statystki ogólne").should("be.visible")
    cy.get(".m-menu__link-text").contains("Ustawienia").click()
    cy.get(".m-portlet__head-text").contains("Lokal").should("be.visible")
    cy.get("#shop_about").should("be.enabled")
    cy.get("#shop_phone").should("be.enabled")
    cy.get("#shop_email").should("be.enabled")
    cy.get("#shop_address").should("be.enabled")
    cy.get("#shop_city").should("be.enabled")
    cy.get("#shop_tpay_api_key").should("be.enabled")
    cy.get("#shop_tpay_api_password").should("be.enabled")
    cy.get("#shop_tpay_client_id").should("be.enabled")
    cy.get("#shop_autocancel_timeout").should("be.enabled")
    cy.get("#shop_display_name").should("be.enabled")
    cy.get("#shop_setting_attributes_delivery_details").should("be.enabled")
    cy.get("#shop_notes_button_text").should("be.enabled")
    cy.get("#shop_menu_title").should("be.enabled")
    cy.get("#shop_permanent_message").should("be.enabled")
    cy.get("#shop_smtp_host").should("be.enabled")
    cy.get("#shop_smtp_username").should("be.enabled")
    cy.get("#shop_smtp_host").should("be.enabled")
    cy.get("#shop_encrypted_smtp_password").should("be.enabled")
    cy.get("#shop_smtp_port").should("be.enabled")
    cy.get("#shop_data_admin_info").should("be.enabled")
    cy.get("#shop_min_order_value").should("be.enabled")
    cy.get("#shop_name").should("be.enabled")
    cy.get("#shop_accepted_payment_methods").select(["Karta", "Karta online", "Gotówka", "Blik", "Przelew"], {
      force: true,
    })
    cy.get("#shop_accepted_delivery_methods").select(["Dostawa", "Odbiór"], {
      force: true,
    })
  })
})
