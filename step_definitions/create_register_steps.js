import MainPage from '../page_object/main.js'

const { Before, Given, When, Then } = require('cucumber');

var total_positive;

Given(/^I open page "([^"]*)"$/, function (site) {
  MainPage.open(site);
  this.total_positive = MainPage.return_total_value();
});

When('I select category to add positive value', function () {
  MainPage.select_category('Income');
});

When('I fill the description', function () {
  MainPage.fill_description('Barra');
});

When('I fill value', function () {
  MainPage.fill_value('25');
});

When('I submit the register', function () {
  MainPage.submit();
});

Then('the new register is showed on table', function () {
    expect(MainPage.find_in_table()).to.include('Barra');
});

Then('the total inflow is changed', function () {
  expect(MainPage.return_total_value()).to.not.equal(this.total_positive);
});

Then('the total outflow is changed', function () {
});

Then('submit button should be desable', function () {
    // Write code here that turns the phrase above into concrete actions
});
