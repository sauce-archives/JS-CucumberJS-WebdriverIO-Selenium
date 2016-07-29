Feature: Domino's Pizza Login

  @en-US @golo1 @url=param
  Scenario Outline: Verify Login
  	# Prereq
    Given I am on the Dominos homepage
    # Action
	When I login as <user_type>
	   # And I ...
	# Assertion
	Then I should be logged in

	Examples:
	    | user_type    |
	    |  new         |
	    |  returning   |
	    |  frequent    |


