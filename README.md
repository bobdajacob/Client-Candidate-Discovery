# Client-Candidate-Discovery

# Table of Contents
[Description](#description)

[User Story](#user-story)

[Features](#features)

[Potential Candidates Page](#potential-candidates-page)

[Installation](#installation)

[Usage](#usage)

[Technologies Used](#technologies-used)

[License](#License)

[GitHub Link](#Github)

[Render](#render)

## Description
This Candidate Search Application is designed to streamline the hiring process by allowing employers to efficiently review and save candidate profiles. This application enables users to navigate through a list of candidates, evaluate their qualifications, and maintain a list of potential hires.

## User Story
As an employer, I want a candidate search application so that I can hire the best candidates.

## Features
### Candidate Search Page
1. Loading Candidates
  * GIVEN a candidate search application
  * WHEN the candidate search page loads
  * THEN the information for one candidate should be displayed, including:
    - Candidate's name
    - Username
    - Location
    - Avatar
    - Email
    - HTML URL
    - Company

2. Saving Candidates
  * WHEN I click the "+" button
  * THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed.

3. Skipping Candidates
* WHEN I click the "-" button
* THEN the next candidate's information should be displayed without saving the current candidate.

4. No Candidates Available

* WHEN there are no candidates available to review
* THEN an appropriate message should be shown indicating no more candidates are available.

## Potential Candidates Page
#### Loading Potential Candidates
* WHEN the potential candidates page loads
* THEN the user should see a list of previously saved potential candidates with their:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - HTML URL
  - Company
  - Persisting Candidate List

## Installation

1. Clone the repository:
   ```bash
   git@github.com:bobdajacob/Client-Candidate-Discovery.git
2. Navigate to the directory:
   ```bash
   cd your-repo-name
3. Install dependencies:
   ```bash
   npm install


## Usage
To run the application, use the following command:
   ```bash
   npm run dev
   ```

## Technologies Used
- **React:** A framework/library for building user interfaces.
- **TypeScript** For functionality and interactivity.

## License
This project is licensed under the MIT License.

![License](https://img.shields.io/badge/license-MIT-yellow)

## GitHub Link
https://github.com/bobdajacob/Client-Candidate-Discovery

## Render Link