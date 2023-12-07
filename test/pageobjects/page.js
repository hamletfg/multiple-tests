import { $ } from '@wdio/globals'
import Page from './page.js';

export default class Page {
    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
