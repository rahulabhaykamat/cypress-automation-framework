Feature: End to End eCommerce validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open eCommerce page
    When I add items to cart
    Then validate the total price
    When select the delivery country and submit
    Then validate the success message

    @Smoke
    Scenario: Fill the form to shop
    Given I open eCommerce page
    When I fill the form details
    |name   |gender |
    |Nilakshi|Female|
    Then validate the form behaviour
    Then select the shop page