Feature: Update vehicle
  Scenario: Update non-existing vehicle
    Given a non-existing vehicle in the database
    When the system attempts to update their info
    Then the system raises a warning message

  Scenario: Update existing vehicle
    Given an existing vehicle in the database
    When the system attempts to update their info
    Then the system returns a success code
