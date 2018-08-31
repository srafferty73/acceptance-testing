Feature: Display the 5 day weather forecast for a given location
  As an Application user I should be able to get weather data based on my input.

  Scenario: Using city names aberdeen, they will receive the weather forecast for the next 5 days.

    Given I navigate to the entry page
    When  I enter the different city names, followed by return key
    Then  The screen will display relevant forecast data for last five days inclusive
    And   All numerical data should be rounded down to the nearest integer


  Scenario:
    Given A five day weather forecast for a city is already displayed
    When  I click anywhere on a row for one of those days
    Then  Data showing three hourly forecasts will dropdown between that day and the next day
    And   The display should show elements in the following way
      | condition                | most dominant or current |
      | wind speed and direction | most dominant or current |
      | rainfall                 | aggregate                |
      | temperature              | minimum                  |
      | temperature              | maximum                  |
    And   All three hour numerical data should be rounded down to the nearest integer









