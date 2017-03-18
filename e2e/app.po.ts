import { browser, element, by } from 'protractor';

export class NgPanesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngp-root h1')).getText();
  }
}
