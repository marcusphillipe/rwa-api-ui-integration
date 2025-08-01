import userData from "../fixtures/userData"
import SignUpPage from "../pages/signUpPage"

const signUpPage = new SignUpPage

describe('Sign Up - Real World App', () => {
    it('Sign Up - Sucess', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithCorrectCredenciais(userData.signUpSucess.firstName, userData.signUpSucess.lastName, userData.signUpSucess.username, userData.signUpSucess.password)
    });


    it('Sign Up - Fail - Blank First Name Field', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithBlankFirstName(userData.signUpFail.lastName, userData.signUpFail.username, userData.signUpFail.password)
    });

    it('Sign Up - Fail - Blank Last Name Field', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithBlankFLastName(userData.signUpFail.firstName, userData.signUpFail.username, userData.signUpFail.password)
    });

    it('Sign Up - Fail - Blank Username Field', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithBlankUsername(userData.signUpFail.firstName, userData.signUpFail.lastName, userData.signUpFail.password)
    });

    it('Sign Up - Fail - Blank Password Field', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithBlankPassword(userData.signUpFail.firstName, userData.signUpFail.lastName, userData.signUpFail.username, userData.signUpFail.password)
    });

    it('Sign Up - Fail - Blank Confirm Password Field', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithBlankConfirmPasswordField(userData.signUpFail.firstName, userData.signUpFail.lastName, userData.signUpFail.username, userData.signUpFail.password)
    });

    it('Sign Up - Fail - Wrong Password Match', () => {
        signUpPage.acessSignUpPage()
        signUpPage.signUpWithWrongPassword(userData.signUpFail.firstName, userData.signUpFail.lastName, userData.signUpFail.username, userData.signUpFail.password, userData.signUpFail.wrongPassword)
    });
})