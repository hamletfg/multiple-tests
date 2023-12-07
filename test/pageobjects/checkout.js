import { $ } from '@wdio/globals'
import Page from './page.js';

class products extends Page {

    get checkoutYourInfo () { return $('#checkout_info_container'); }
    get cancelButton () { return $('#cancel'); }
    get continueButton () { return $('#continue'); }
    get errorFieldButton () { return $('.error-button'); }
    get firstNameField () { return $('#first-name'); }
    get lastNameField () { return $('#last-name'); }
    get postalCodeField () { return $('#postal-code'); }

    

}