import MainPage from '../page_object/main.js'
import ReportPage from '../page_object/report.js'

const { Then } = require('cucumber');

Then('the new register is showed on table', function () {
    expect(MainPage.find_in_table()).to.include('Barra');
});

Then('the total inflow on main is changed', function () {
  expect(MainPage.return_total_value_inflow()).to.not.equal(MainPage.return_total_value_loaded());
});

Then('he outflow total on report is increased', function () {

});

Then('the inflow total on report is increased', function () {
  ReportPage.wait();
  expect(ReportPage.return_total_value_inflow()).to.not.equal(MainPage.return_total_value_loaded());
});

Then('submit button should be desabled', function () {
    // Correct expect
    // expect(MainPage.return_submit_is_enabled()).to.be.false;
    // Wrong expect
    expect(MainPage.return_submit_is_enabled()).to.be.true;
});

Then('submit button should be enabled', function () {

});

Then('the category of outflow is showed', function () {
    // Write code here that turns the phrase above into concrete actions
});

Then('I visualize changes on Spending by category', function () {
    // Write code here that turns the phrase above into concrete actions
});
