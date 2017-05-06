Feature: Create a new account
  As a New User
  I want to land on create account screen
  And create a new account successfully

  Scenario: Create account form submit
    Given that I am on the "Create Account" screen
    When I click on "Create Account" button
    Then I should see "Account Mgt" screen
