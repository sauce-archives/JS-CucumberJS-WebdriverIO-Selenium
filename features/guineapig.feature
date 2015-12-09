Feature: Guinea Pig page
  In order to learn more about this years draft
  As a User
  I want to view the draft city homepage

  Scenario: Verify email input field
    Given I am on the sauce guinea pig page
    Then I type "abc@gmail.com" into the email input field
    Then the email input value field should contain "abc@gmail.com"
