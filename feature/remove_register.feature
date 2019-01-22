Feature: Delete Register

@Pending
Scenario: Remove positive value register
  Given I open page "https://budget.modus.app/budget"
  When I select a positive value on table
  And I delete the register
  Then the register is not showed on table
  And the total inflow is changed

@Pending
Scenario: Remove negative value register
  Given I open page "https://budget.modus.app/budget"
  When I select a negative value on table
  And I delete the register
  Then the new register is not showed on table
  And the total outflow is changed
