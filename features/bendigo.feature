Feature: Bendigo Bank Website

  Scenario: TC-001 Apply for Bendigo Bank Credit Card
    Given I am on the bendigo bank home page
    When User select Banking menu
    Then Choose Credit Card option
    And Apply for Bendigo Bright credit card

  Scenario: TC-002 Validate check my eligibility section
    Given I am on check my eligibility page
    When User click on Continue to Apply button
    Then Getting started page appears, fill the details and click Continue button

  Scenario: TC-003 Validate Cancel Popup
    Given I am on financial details section
    When User cancel the application
    Then A flash message should appear