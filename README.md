# JS e2e test webdriverIO+Chai+Cucumber

<br>


**All features and scenarios for test are:**<br>
_'features/\*.features'_

**Automation test:**<br>
_I wrote automation in JS + Chai + cucumber.<br>_
_I configured wdio to use selenium-standalone, so in this project you need to start selenium in your machine.<br>_
_I use PageObject to register page components_ <br>
_I wrote basic scenarios of test, without edge test cases or validation for components limits._<br>
_I automated just two test cases Create new positive value register and Add on report new inflow value. My intention is on future to add more scenarios._<br>

**Test case will fail:**<br>
_I changed the expect on Validate value is required to add to fail test case like as required_<br>

**Things I should did different:**<br>
_I should use camelCase, but I'm working with python, so I just wrote and realize that after finish_<br>
_I should create script on package.json to run more friendly the tests cases_<br>
_I should create wait way to keep interaction with elements in DOM more resilient_<br>
_I should create customized report to espose results of execution_<br>


**Install dependencies:**<br>
_npm install_<br>

**Run automation:**<br>
_wdio wdio.conf.js_<br>
