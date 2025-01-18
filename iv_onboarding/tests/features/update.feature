Feature: Update user
  Scenario: Update non-existing user
    Given a non-existing user in the database
    When the system attempts to update their info
    Then the system raises a warning message

  Scenario: Update existing user
    Given an existing user in the database
    When the system attempts to update their info
    Then the system returns a success code
