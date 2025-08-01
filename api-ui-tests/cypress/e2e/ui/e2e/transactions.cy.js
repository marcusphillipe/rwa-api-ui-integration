import userData from "../fixtures/userData";
import transactionData from "../fixtures/transactionData.json";
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


describe('Transaction - Real World App', () => {

  it('Transaction With Funds', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectCredentials(userData.loginWithBalance.username, userData.loginWithBalance.password)
    homePage.acessHomePage()
    homePage.acessTransactionPage()
    transactionPage.checkBalance(transactionData.contact.name, transactionData.transactionSucess.amount, transactionData.transactionSucess.note)
  });

  it('Transaction Without Funds', () => {
    signinPage.acessSignUpPage()
    signinPage.signUpWithCorrectCredenciais(userData.signUpSucess.firstName, userData.signUpSucess.lastName, userData.signUpSucess.username, userData.signUpSucess.password)
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectCredentials(userData.loginSucess.username, userData.loginSucess.password)
    homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
    homePage.acessHomePage()
    homePage.acessTransactionPage()
    transactionPage.checkBalance(transactionData.contact.name, transactionData.transactionFail.amount, transactionData.transactionFail.note)
  });

});