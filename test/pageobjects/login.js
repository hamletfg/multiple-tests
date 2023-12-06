import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputUsername () { return $('#user-name'); }
    get inputPassword () { return $('#password'); }
    get loginButton () { return $('#login-button'); }
    get swagLabsHeader () { return $('.app_logo'); }
    get loginError () { return $('[data-test="error"]'); }

    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.loginButton.click()
    }

    async errorLogin (errorUserName, errorPassword) {
        await this.login(errorUserName, errorPassword)
        await expect(this.loginError).toBeExisting
    }

    async validLogin (validUserName, validPassword) {
        await this.login(validUserName, validPassword)
        await expect(this.swagLabsHeader).toBeExisting()
    }

    open () {
        return super.open();
    }
}

export default new LoginPage();
