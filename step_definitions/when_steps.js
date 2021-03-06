import MainPage from '../page_object/main.js'
import ReportPage from '../page_object/report.js'

const { When } = require('cucumber');

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

When('I register new value to inflow', function () {
  MainPage.select_category('Income');
  MainPage.fill_description('DanielBarra');
  MainPage.fill_value('2509')
  MainPage.submit();
  expect(MainPage.find_in_table()).to.include('DanielBarra');
});

When('I register new value to outflow', function () {
  MainPage.select_category('Taxes');
  MainPage.fill_description('DanielBarra');
  MainPage.fill_value('2509')
  MainPage.submit();
  expect(MainPage.find_in_table()).to.include('DanielBarra');
});

When('I visualize the report', function () {
  MainPage.click_link_report();
});
