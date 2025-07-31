import HomePage from "./homePage"

class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[type='password']",
            loginButton: "[type='submit']",
            disableLoginButon: "[disabled='']",
            signUpButton: "[href='/signup']",
            wrongCredentialAlert: "[role='alert']",
            signUpPageTextTitle: "[data-test='signup-title']",
            homePageButton: "[data-test='sidenav-home']",
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit(baseURL).contains('Sign in')
    }

    loginWithCorrectCredentials(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().homePageButton).contains('Home')
    }

    loginWithWrongCredentials(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    loginWithoutFillingFields() {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().disableLoginButon).should('be.visible')
    }

    clickSignUpButton() {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().signUpPageTextTitle).contains('Sign Up')
    }
}

export default LoginPage