# team-profile-generator

## Description
This is a command-line application that takes in information about employees on a software team that generates an HTML file displaying these details.

## Table of Contents:
    1. [User Story](##User Story) 
    2. [Acceptance Criteria](##Acceptance Criteria)  
    3. [Installation](##Installation)
    4. [Links](##Links)

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Installation
To run the application, VS Code and GitBash/Terminal are required. Follow the steps below to begin installation:

- Open the integrated terminal
    - Run `npm i` to install dependencies
- `npm run test` to run tests
- `node/nodemon index.js` to run server

## Links
https://github.com/tshen28/team-profile-generator

https://drive.google.com/file/d/1xqUf7diw7wzeBJsv_6rF-TbXXPVktcuj/view?usp=sharing 
