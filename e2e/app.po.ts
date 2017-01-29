import { browser, element, by } from 'protractor';

export class ClodinaryAngular2GalleryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
