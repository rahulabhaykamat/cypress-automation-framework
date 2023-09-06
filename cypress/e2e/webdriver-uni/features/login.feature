@Regression
Feature: Webdriver University Login page

    Scenario: Login using with valid credentials
        Given I access WebDriver University Login portal page
        When I enter a user name webdriver
        And I enter a password webdriver123
        And I click on Login button
        Then I should be presented with the validation succeeded message
    
    Scenario: Login using with invalid credentials
        Given I access WebDriver University Login portal page
        When I enter a user name webdriver
        And I enter a password webdriver1234
        And I click on Login button
        Then I should be presented with the validation failed message
    
    Scenario Outline: Login using multiple dataset
        Given I access WebDriver University Login portal page
        When I enter a user name <username>
        And I enter a password <password>
        And I click on Login button
        Then I should be presented with the <validation> message

        Examples:
            | username | password | validation |
            | webdriver  | webdriver123  | validation succeeded  |
            | webdriver  | webdriver1234  | validation failed  |