class SignUpPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            alertFirstNameField: '#firstName-helper-text',
            lastNameField: "[name='lastName']",
            alertLastNameField: '#lastName-helper-text',
            usernameField: "[name='username']",
            alertUsernameField: '#username-helper-text',
            passwordField: "[name='password']",
            alertPasswordField: '#password-helper-text',
            confirmPasswordField: "[name='confirmPassword']",
            alertWrongPassword: '#confirmPassword-helper-text',
            alertConfirmPasswordField: '#confirmPassword-helper-text',
            signupButton: "[type='submit']",
            disableButton: "[disabled='']"
        }
        return selectors
    }

    acessSignUpPage() {
        cy.visit('baseUrl').contains('Sign Up')
    }
    signUpWithCorrectCredenciais(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().signupButton).click()
    }

    signUpWithBlankFirstName(lastName, username, password,) {
        cy.get(this.selectorsList().firstNameField).click()
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertFirstNameField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signUpWithBlankFLastName(firstName, username, password,) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertLastNameField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signUpWithBlankUsername(firstName, lastName, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertUsernameField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signUpWithBlankPassword(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertPasswordField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signUpWithBlankConfirmPasswordField(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().confirmPasswordField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().alertConfirmPasswordField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signUpWithWrongPassword(firstName, lastName, username, password, wrongPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(wrongPassword)
        cy.get(this.selectorsList().alertWrongPassword).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }
}

export default SignUpPage