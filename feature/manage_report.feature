Feature: Validate report

@Pending
Scenario: Add on report new inflow value
  Given I open page "https://budget.modus.app/budget"
  When I register new value to inflow
  And I visualize the report
  Then the inflow total is increase
  And the total inflow is increased

@Pending
Scenario: Add on report new outflow value
  Given I open page "https://budget.modus.app/budget"
  When I register new value to outflow
  And I visualize the report
  Then the outflow total is increase
  And the total outflow is increased
  And the category of outflow is showed
  And I visualize changes on Spending by category
