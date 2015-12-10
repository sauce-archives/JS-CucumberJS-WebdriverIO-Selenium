Feature: Guinea Pig page

  Scenario: Verify email input field
    Given I am on the sauce guinea pig page
    Then I type "abc@gmail.com" into the email input field
    Then the email input value field should contain "abc@gmail.com"
