Feature: NFL Draft City Chicago Map
  In order to learn more about the draft history
  As a User
  I want learn about Willis Tower

  Scenario: Willis Tower
    Given I am on the draft city chicago homepage
    When I click the explore icon
    Then I wait for the map to collapse
    When I click on the map icon in the right rail
    When I click on "Willis Tower" in the expanded svg map
    Then I should see the overlay of "Willis Tower"
