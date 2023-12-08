import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


class Checkout extends Page {

    // Selectors for Shopping Cart
    get selectShoppingCart () { return $('#shopping_cart_link'); }
    get yourCartPage () { return $('#cart_contents_container'); }
    get removeBackpack () { return $('#remove-sauce-labs-backpack'); }
    get removeTShirt () { return $('#remove-sauce-labs-bolt-t-shirt'); }
    get continueShopping () { return $('#continue-shopping'); }
    get selectCheckout () { return $('#checkout'); }

    // Selectors for Checkout
    get checkoutYourInfo () { return $('#checkout_info_container'); }
    get cancelButton () { return $('#cancel'); }
    get continueButton () { return $('#continue'); }
    get errorFieldButton () { return $('.error-button'); }
    get firstNameField () { return $('#first-name'); }
    get lastNameField () { return $('#last-name'); }
    get postalCodeField () { return $('#postal-code'); }
}