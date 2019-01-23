export default class Base {

  loadAndWaitUntilVisible() {
    this.load();
    return this.waitUntilVisible();
  }

  waitUntilElementIsVisible(locator) {
    const element = browser.wait(this.until.elementLocated(locator));
    return browser.wait(this.until.elementIsVisible(element));
  }

  open (path) {
    browser.url(path);
  }

  wait() {
    browser.pause(3000);
  }

}
