describe("DeliGoo", () => {
  // beforeEach(() => {
  //   cy.visit("/admins/sign_in")
  // })

  afterEach(() => {
    cy.window().then((win) => {
      // @ts-ignore
      win.document.activeElement.blur()
    })
  })
})
