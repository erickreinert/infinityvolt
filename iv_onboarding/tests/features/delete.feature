Feature: Delete user
  Scenario: Attempt to delete non-existing user
    When the system attempts to delete an user
    And the user does not exist in the database
    Then the system raises a warning message

  Scenario: Delete existing user
    When the system attempts to delete an user
    And the user exists in the database
    Then the system deletes the user
    And returns a success code
