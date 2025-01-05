Feature: Update user
  Scenario: Update non-existing user
    When the system attempts to update a user info
    And the user does not exist in the database
    Then the system raises a warning message

  Scenario: Update existing user
    When the system attempts to update a user info
    And the user exists in the database
    Then the system return a success code
