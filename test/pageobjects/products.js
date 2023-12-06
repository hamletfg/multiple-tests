import { $ } from '@wdio/globals'
import Page from './multiplePage.js';

class products extends Page {

    get selectBackpack () { return $('#item_4_title_link'); }
    get selectTShirt () { return $('#item_1_title_link'); }

}

