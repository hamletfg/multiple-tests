import LoginPage from '../pageobjects/login.js'

describe('Negative test for standard_user login', () => {
    it('should not log in with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.errorLogin('standard_user', 'randomPassw0rd')
    })
})

describe('Positive test for standard_user login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })
})




