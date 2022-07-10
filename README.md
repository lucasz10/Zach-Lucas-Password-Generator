# Zach-Lucas-Password-Generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Functionality

The web application is deployed at [reserved for url]

The password generation is an application that opens window prompts for a user to input criteria for a password they would like to randomly generate. The first window prompt allows the user to enter a password length between 8 and 128 characters. This is followed by setting parameters for the characters generated. This includes Upper case letters, lower case letters, numbers, and special characters.

Once the user has input their criteria, a window will open displaying their choices. If the user confirms, the password will generate and appear on the web application.