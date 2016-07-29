Feature: Domino's Pizza Customizer

  @en-US @do-DO @golo1 @url=param
  Scenario Outline: Verify Customizer is launched
  	# Prereq
    Given I am on the Dominos homepage and logged in as <user_type>
    # Action
	When I select pizza: <pizza_type>
	# Assertion
	Then I should see the pizza customizer

	Examples:
	    |  user_type   |    pizza     |
	    |    new       | spinach feta |
	    |    new       | pepporoni    |
	    |  returning   | cheese
	    |  frequent    | Hawaiian     |


