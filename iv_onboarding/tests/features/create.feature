Feature: Create a new user
  Scenario: Create new user
    When a user fills up a first name
    * a user fills up a last name
    * a user fills up a birthdate
    * a user fills up a phone number
    * a user fills up an e-mail
    Then the system creates the user and returns a success code

  Scenario: Attempt to create duplicate user
    Given an existing user account registered
    When someone uses the existing user's email to register a new account
    Then the system blocks the new registration
