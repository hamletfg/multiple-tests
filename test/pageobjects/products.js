import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from './login.js';

class Products extends Page {

    // Selectors for items in products section
    get productBackpack () { return $('#item_4_title_link'); }
    get productTShirt () { return $('#item_1_title_link'); }

    // Selectors for adding items to cart
    get shoppingCart () { return $('#shopping_cart_container'); }
    get addBackpack () { return $('#add-to-cart-sauce-labs-backpack'); }
    get backpackDetails () { return $('//div[@class="inventory_item_desc"][contains(text(),"Sly Pack")]'); }
    get addTShirt () { return $('#add-to-cart-sauce-labs-bolt-t-shirt'); }
    get tShirtDetails () { return $('//div[@class="inventory_item_desc"][contains(text(),"American Apparel")]'); }

    async addingToCart (productOne, productTwo, productDetails) {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(this.loggedIn).toBeExisting();
        await productOne.click();
        await expect(productDetails).toBeExisting();

        await this.addToCart.click();
        await expect(this.shoppingCart).toBeExisting();
        await this.shoppingCart.click();
        await expect(selectorProduct).toBeExisting();
    }
}

