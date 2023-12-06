import { $ } from '@wdio/globals'

class products extends Page {

    get selectShoppingCart () { return $('#shopping_cart_link'); }
    get yourCartPage () { return $('#cart_contents_container'); }
    get removeBackpack () { return $('#remove-sauce-labs-backpack'); }
    get removeTShirt () { return $('#remove-sauce-labs-bolt-t-shirt'); }
    get continueShopping () { return $('#continue-shopping'); }
    get selectCheckout () { return $('#checkout'); }
    
}