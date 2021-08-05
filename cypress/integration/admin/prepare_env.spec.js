describe("Prepareing enviroment before testing", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  beforeEach(() => {
    const email = "admin@example.com"
    const password = "Secret00"
    cy.loginAdmin(email, password, "preproduction")

    cy.get("#spop--top-right", { timeout: 10000 }).contains("Zalogowano pomyślnie").should("be.visible")
  })

  // it('set working hours for driver', () => {
  // cy.get('.la-angle-down').click(),
  // cy.get('.admin-select-btn:nth-child(1)').click().then(() => {
  //   cy.get('.m-menu__item--hover', { timeout: 10000 }).should('be.visible').then(() => {
  //     cy.get('.m-menu__item--open-dropdown').click(),
  //     cy.get('.m-menu__link-text').contains('Testy automatyczne').click({force:true})
  //     cy.get('a[href="/admin/drivers"]').click(),
  //     cy.url().should('contain', "drivers"),
  //     cy.get('.td-menu').click(),
  //     cy.get('a[href="/admin/drivers/499/breaks"').click(),
  //     cy.get('.btn-default:nth-child(2)').click(),
  //     cy.get('#driver_start_working_hours_attributes_0_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_0_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_start_working_hours_attributes_1_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_1_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_start_working_hours_attributes_2_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_2_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_start_working_hours_attributes_3_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_3_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_start_working_hours_attributes_4_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_4_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_start_working_hours_attributes_5_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_5_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_start_working_hours_attributes_6_value_4i').select('06').should('have.value', '06')
  //     cy.get('#driver_start_working_hours_attributes_6_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_0_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_0_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_1_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_1_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_2_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_2_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_3_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_3_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_4_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_4_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_5_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_5_value_5i').select('00').should('have.value', '00')
  //     cy.get('#driver_end_working_hours_attributes_6_value_4i').select('20').should('have.value', '20')
  //     cy.get('#driver_end_working_hours_attributes_6_value_5i').select('00').should('have.value', '00')
  //     cy.get('.btn-warning').then((zapisz_buttons) => {
  //       console.log(zapisz_buttons),
  //       zapisz_buttons[0].click()
  //     })
  //     })
  //   })
  // })
  
  it("creating localization", () => {
    cy.loginAdmin("admin@example.com", "Secret00", "staging")
    cy.chooseTeam("Testy automatyczne")
    cy.navigateMenuTo("Lokalizacje")
  })

  it("go_to_partner_via_admin ", () => {
    cy.get(".la-angle-down").click(),
      cy
        .get(".admin-select-btn:nth-child(1)")
        .click()
        .then(() => {
          cy.get(".m-menu__item--hover", { timeout: 10000 })
            .should("be.visible")
            .then(() => {
              cy.get(".m-menu__item--open-dropdown").click(),
                cy.get(".m-menu__link-text").contains("Testy automatyczne").click({ force: true })
                cy.get('a[href="/admin/partners"]').click(),
                cy.url().should("contain", "partners"),
                cy.get(".td-menu-btn").click()
              cy.get(".context-menu__item:nth-child(1)").click()
            })
        })
  })

  // it('go_to_shop_via_admin', () => {                                     //dodać wybieranie restauracji
  //   cy.visit('https://dev.deligoo.pl/partners/sign_in')
  //   cy.title().should('eq','DeliGoo - Panel kierowcy')
  //   cy.get('#partner_username_or_email').type('kacper.pietrzyk@gmail.com')
  //   cy.get('#partner_password').type('Secret00!')
  //   cy.get('#m_login_signin_submit').click()
  //   cy.get('#spop--top-right', { timeout: 10000 }).should('be.visible')
  //   cy.get('.m-menu__link-text').contains('eq', 'Przejdź do sklepu').click()
  // })

  it("adds order from shop", () => {
    cy.visit("https://staging-app.deligoo.pl/restaurants/automatyczny-kebab")
    cy.title().should("eq", "Automatyczny Kebab - Zamów online")
    cy.get(".menu__item_title").contains("Makaron").click({ force: true })
    cy.get(".text-dark").contains("Przejdź dalej").click({ force: true })
    cy.get(".position-relative").contains("Dostawa").click()
  })
})
