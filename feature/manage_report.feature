Feature: Validate report

Scenario: Add on report new inflow value
  Given I open page "https://budget.modus.app/budget"
  When I register new value to inflow
  And I visualize the report
  Then the inflow total on report is increased

@Pending
Scenario: Add on report new outflow value
  Given I open page "https://budget.modus.app/budget"
  When I register new value to outflow
  And I visualize the report
  Then the outflow total on report is increased
  And the category of outflow is showed
  And I visualize changes on Spending by category
