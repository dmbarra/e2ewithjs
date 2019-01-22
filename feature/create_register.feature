Feature: Create Register

Scenario: Create new positive value register
  Given I open page "https://budget.modus.app/budget"
  When I select category to add positive value
  And I fill the description
  And I fill value
  And I submit the register
  Then the new register is showed on table
  And the total inflow is changed

@Pending
Scenario: Create new negative value register
  Given I open page "https://budget.modus.app/budget"
  When I select category to add negative value
  And I fill the description
  And I fill value
  And I submit the register
  Then the new register is showed on table
  And the total outflow is changed

@Pending
Scenario: Validate description is required to add
  Given I open page "https://budget.modus.app/budget"
  When I select category to add positive value
  And I fill value
  Then submit button should be desable

@Pending
Scenario: Validate value is required to add
  Given I open page "https://budget.modus.app/budget"
  When I select category to add positive value
  And I fill the description
  Then submit button should be desable
