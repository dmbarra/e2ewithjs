import MainPage from '../page_object/main.js'

const { Then } = require('cucumber');

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

Then('the inflow total is increase', function () {

});

Then('the total inflow is increased', function () {
  expect(MainPage.return_total_value()).to.not.equal(MainPage.return_total_value_loaded());
});

Then('the outflow total is increase', function () {
});

Then('the total outflow is increased', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('the category of outflow is showed', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('I visualize changes on Spending by category', function () {
    // Write code here that turns the phrase above into concrete actions
});
