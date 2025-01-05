Feature: Delete user
  Scenario: Attempt to delete non-existing user
    Given a user does not exist in the database
    When the system attempts to delete them
    Then the system raises a warning message

  Scenario: Delete existing user
    Given a user exists in the database
    When the system attempts to delete them
    Then the system deletes the user
    And returns a success code
