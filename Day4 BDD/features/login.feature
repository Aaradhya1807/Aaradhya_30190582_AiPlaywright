Feature: Login Feature

Scenario: Valid Login
Given User opens the application
When User enters credentials
Then User should login successfully


Scenario: Invalid Login
Given User opens the application
When User enters invalid credentials
Then User should view the error message


@smoke
Scenario Outline: Verify login with multiple users

Given User opens the application
When User enters "<username>" and "<password>"
Then User should login successfully

Examples:
| username                | password      |
| standard_user           | secret_sauce  |
| problem_user            | secret_sauce  |
| performance_glitch_user | secret_sauce  |
| error_user              | secret_sauce  |
| visual_user             | secret_sauce  |