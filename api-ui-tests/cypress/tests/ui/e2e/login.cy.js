import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage

describe('Login - Real World App', () => {

    it('Try to Login With Registered User', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithCorrectCredentials(userData.loginWithBalance.username, userData.loginWithBalance.password)
    });

    it('Try to Login With Non-Registered User', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithWrongCredentials(userData.loginFail.username, userData.loginFail.password)
    });

    it('Try to Login With Wrong User', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithWrongCredentials(userData.loginFail.username, userData.loginWithBalance.password)
    });

    it('Try to Login With Wrong Password', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithWrongCredentials(userData.loginWithBalance.username, userData.loginFail.password)
    });

    it('Try to Login Without Filling Fields', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithoutFillingFields()
    });

    it('Register New User', () => {
        loginPage.acessLoginPage()
        loginPage.clickSignUpButton()
    });

});