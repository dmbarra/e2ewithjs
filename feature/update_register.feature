Feature: Update Register

@Pending
Scenario: Update positive value register
  Given I open page "https://budget.modus.app/budget"
  When I select a positive value on table
  And I fill the description
  And I fill value
  And I submit the register
  Then the total inflow is not changed

@Pending
Scenario: Update negative value register
  Given I open page "https://budget.modus.app/budget"
  When I select a negative value on table
  And I fill the description
  And I fill value
  And I submit the register
  Then the total outflow is not changed

@Pending
Scenario: Validate description is required to update
  Given I open page "https://budget.modus.app/budget"
  When I select a positive value on table
  And I fill value
  Then submit button should be enable

@Pending
Scenario: Validate value is required to update
  Given I open page "https://budget.modus.app/budget"
  When I select a positive value on table
  And I fill the description
  Then submit button should be desable
