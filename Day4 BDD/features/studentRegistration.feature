Feature: Student Registration

  Scenario Outline: Successful student registration
    Given the student is on the registration page
    When the student enters valid registration details "<Name>" "<Email>" "<Gender>" "<Mobile>" "<DOB>" "<Subject>" "<Hobby>" "<Address>" "<State>" "<City>"
    Then the login button should be enabled

    Examples:
      | Name  | Email             | Gender | Mobile     | DOB        | Subject | Hobby   | Address    | State     | City |
      | Dadda | dadda@example.com | Male   | 1234567890 | 2000-01-01 | Math    | Reading | 123 Street | Rajasthan | Agra |