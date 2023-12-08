import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get inputUsername () { return $('#user-name'); }
    get inputPassword () { return $('#password'); }
    get loginButton () { return $('#login-button'); }
    get swagLabsHeader () { return $('.app_logo'); }
    get loginError () { return $('[data-test="error"]'); }
    get shoppingCart () { return $('#shopping_cart_container'); }

    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await browser.pause(500)
        await this.loginButton.click()
        await browser.pause(500)
    }

    
    async errorLogin (errorUserName, errorPassword) {
        await this.open()
        await this.login(errorUserName, errorPassword)
        await expect(this.loginError).toBeExisting()
    }

    async goodLogin(name, pass) {
        await this.open()
        await this.login(name, pass)
        await expect(this.shoppingCart).toBeExisting()

    }

    async logout () {
        await this.hamburgerMenu.click();
        await this.logoutBtn.click();
    }

    open () {
        return super.open();
    }
}

export default new LoginPage();
