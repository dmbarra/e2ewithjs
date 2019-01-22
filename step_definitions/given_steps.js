import MainPage from '../page_object/main.js'

const { Given } = require('cucumber');

Given(/^I open page "([^"]*)"$/, function (site) {
  MainPage.open(site);
});
