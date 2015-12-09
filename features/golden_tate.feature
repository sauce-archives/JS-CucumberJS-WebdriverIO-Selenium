Feature: NFL Draft City Chicago Expore
  In order to learn more about past NFL Draftees
  As a User
  I want see other people that were drafted

  Scenario: Golden Tate
    Given I am on the draft city chicago homepage
    When I click the explore icon
    Then I should see the Auditorium Theatre header and text
    Then I should see a profile picture for "Golden Tate"
    Then I should see a bio entry for "Golden Tate"
