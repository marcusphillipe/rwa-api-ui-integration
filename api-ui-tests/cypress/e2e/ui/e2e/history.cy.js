import userData from "../fixtures/userData";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SigninPage from "../pages/signUpPage";
import TransactionPage from "../pages/transactionPage";

const Chance = require('chance')

const chance = new Chance()
const homePage = new HomePage
const loginPage = new LoginPage
const signinPage = new SigninPage
const transactionPage = new TransactionPage


describe('Verify Transaction History - Real World App', () => {

    it("Don't have transaction - Sucess", () => {
        signinPage.acessSignUpPage()
        signinPage.signUpWithCorrectCredenciais(userData.noHistoryUser.firstName, userData.noHistoryUser.lastName, userData.noHistoryUser.username, userData.noHistoryUser.password)
        loginPage.acessLoginPage()
        loginPage.loginWithCorrectCredentials(userData.noHistoryUser.username, userData.noHistoryUser.password)
        homePage.acessHomePage()
        homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
        transactionPage.noTransactionsHistory()
    })

    it("Have transaction - Sucess", () => {
        loginPage.acessLoginPage()
        loginPage.loginWithCorrectCredentials(userData.loginWithBalance.username, userData.loginWithBalance.password)
        homePage.acessHomePage()
        homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
        transactionPage.haveTransaction()
    })

});