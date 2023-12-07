import { $ } from '@wdio/globals'
import Page from './page.js';

class products extends Page {

    get productBackpack () { return $('#item_4_title_link'); }
    get productTShirt () { return $('#item_1_title_link'); }

}

