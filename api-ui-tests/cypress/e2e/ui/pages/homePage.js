import transactionData from "../fixtures/transactionData.json";
import TransactionPage from "./transactionPage"

const transactionPage = new TransactionPage

class HomePage {
    selectorsList() {
        const selectors = {
            homePageButton: "[data-test='sidenav-home']",
            nextButton: "[data-test='user-onboarding-next']",
            bankNameField: "[placeholder='Bank Name']",
            routingNumberField: "[placeholder='Routing Number']",
            accountNumberField: "[placeholder='Account Number']",
            saveButton: "[type='submit']",
            doneButton: "[data-test='user-onboarding-next']",
            newTransactionButton: "[href='/transaction/new']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
        }
        return selectors
    }

    acessHomePage() {
        cy.visit('').contains('Home')
    }

    acessTransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    getStartedNavPage(bankName, routingNumber, accountNumber) {
        cy.wait(1000).get('body').then(($body) => {
            if ($body.text().includes("Get Started with Real World App")) {
                cy.get(this.selectorsList().nextButton).click()
                cy.get(this.selectorsList().bankNameField).type(bankName)
                cy.get(this.selectorsList().routingNumberField).type(routingNumber)
                cy.get(this.selectorsList().accountNumberField).type(accountNumber)
                cy.get(this.selectorsList().saveButton).click()
                cy.get(this.selectorsList().doneButton).click()
            }
        })
    }

}

export default HomePage