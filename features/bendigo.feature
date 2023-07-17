Feature: Bendigo Bank Website

  Scenario: TC-001 Apply for Bendigo Bank Credit Card

    Given I am on the bendigo bank home page
    When User select Banking menu
    Then Choose Credit Card option
    And Apply for Bendigo Bright credit card

  Scenario: TC-002 Validate check my eligibility section
    Given I am on getting started page
    Then enter preferred credit card limit
    Then select general purpose use as the purpose
    And click Continue button

  Scenario: TC-003 Fill Application Details section
    Given I am on the application details page
    Then Choose relationship status and answer No for the remaining questions
    And click Continue button

  Scenario: TC-004 Validate Time and Eligibility and Branch details
    Given I am on Time and Eligibility page
    When User choose Yes option and click Continue button
    Then Enter and find Melbourne as location
    Then Select Clifton Hill option
    And click Continue button

  Scenario: TC-005 Validate Income details
    Given I am on the income details page
    When User select Casual
    Then Input Professional in the textbox for occupation and select Social Professionals
    Then Enter Amount as $20000 and select Frequency as Annually
    And click Continue button

  Scenario: TC-006 Validate Expense details
    Given I am on the expense details page
    Then Enter Amount as $6000 and select payment frequency as monthly
    And click Cancel button

  Scenario: TC-007 Validate Cancel Popup
    When user select Yes button to cancel the application
    Then a flash message should appear