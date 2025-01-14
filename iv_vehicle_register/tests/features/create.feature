Feature: Register a new vehicle
  Scenario: Register new vehicle
    When a user fills up a vehicle brand
    * a user fills up a vehicle model
    * a user fills up a model year
    * a user fills up the vehicle's autonomy
    Then the system registers the vehicle and returns a success code
