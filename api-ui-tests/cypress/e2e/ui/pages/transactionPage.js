class TransactionPage {
    selectorsList() {
        const selectors = {
            newTransactionButton: "[href='/transaction/new']",
            searchButton: "[placeholder='Search...']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            submitButton: "[data-test='transaction-create-submit-payment']",
            confirmTransaction: "[role='alert']",
            createNewTransactionButton: "[data-test='new-transaction-create-another-transaction']",
            noTransactionsText: "[data-test='empty-list-header']",
            personalTransactions: "[href='/personal']",
            receiverName: "[data-test='transaction-receiver-Ec6hHyL6SC2F']",
            balance: "[data-test='sidenav-user-balance']"
        }
        return selectors
    }

    newTransactionWithInsufficientFunds(contact, amount, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().searchButton).click({ force: true }).type(contact)
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().confirmTransaction).contains("Insufficient Funds!")
    }

    newTransactionWithSufficientFunds(contact, amount, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().searchButton).click({ force: true }).type(contact)
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().confirmTransaction).contains("Transaction Submitted!")
        cy.get(this.selectorsList().createNewTransactionButton).should('be.visible')
    }

    checkBalance(contact, value, note) {
        cy.get(this.selectorsList().balance)
            .invoke("text")
            .then((text) => {
                const balance = parseFloat(text.replace(/[^0-9.]+/g, ""));
                if (balance < value) {
                    this.newTransactionWithInsufficientFunds(contact, value, note);
                }
                if (balance >= value) {
                    this.newTransactionWithSufficientFunds(contact, value, note);
                }
            });
    }

    noTransactionsHistory() {
        cy.get(this.selectorsList().personalTransactions).contains("Mine").click()
        cy.get(this.selectorsList().noTransactionsText).contains("No Transactions")
    }

    haveTransaction() {
        cy.get(this.selectorsList().personalTransactions).contains("Mine").click()
        cy.get(this.selectorsList().receiverName).should('be.visible')
    }
}

export default TransactionPage