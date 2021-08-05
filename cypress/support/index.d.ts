/// <reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

declare namespace Cypress {
  type TestEnvironment = "preproduction" | "uat" | "staging" | "sandbox"

  type LoginFn = <S>(username: string, password: string, env?: TestEnvironment) => Chainable<S>

  interface Chainable<Subject> {
    loginAdmin: LoginFn
    loginPartner: LoginFn
    loginPos: LoginFn

    chooseTeam<S>(team: string): Chainable<S>
    navigateMenuTo<S>(where: string): Chainable<S>

    /** Selects elements where class starts with given className */
    getByClass<E extends Node = HTMLElement>(className: string): Chainable<JQuery<E>>
  }
}
