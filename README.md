# Job Listing Platform

This project is a React-based job listing platform that allows users to filter and apply for jobs. It utilizes Material-UI for styling and Redux for state management, making it both visually appealing and functionally robust.

## Features

-   **Job Listings**: Users can view a list of jobs fetched from a backend API.
-   **Filters**: Users can filter jobs based on various criteria such as company name, role, location, experience, and salary.
-   **Salary Currency**: The currency for salary is automatically derived from the `salaryCurrencyCode` provided in each job object.
-   **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.

## Tech Stack

-   **React**: A JavaScript library for building user interfaces.
-   **Material-UI**: A popular React UI framework for implementing Google's Material Design.
-   **Redux**: A state management library for JavaScript apps, used here to manage app state globally.
-   **Redux Toolkit**: A toolset for efficient Redux development.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ShubhanginiSharma627/job-listing-app.git
    ```
2. Navigate into the project directory:
    ```bash
    cd job-listing-platform
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

To run the application locally:

```bash
npm start
```

This will start the development server and open the application in your default web browser at `http://localhost:3000`.

## API Integration

The application fetches job data from the following API endpoint:

```
https://api.weekday.technology/adhoc/getSampleJdJSON
```

**Note**: The current API does not provide `tech-stack` and `skills` information, hence the filters for tech stacks are not operational, and the skills section has been removed from the job cards.

## Interface Preview

Here is a preview of the job listing interface:
<img width="1465" alt="Screenshot 2024-05-05 at 11 00 49 PM" src="https://github.com/ShubhanginiSharma627/job-listing-app/assets/63640650/2f83e5f1-8ad5-4acf-9ba2-3cb7450191dc">

## Known Issues

-   **Tech Stack Filter Not Working**: Due to the absence of tech stack data in the API response, the filter functionality for tech stacks is currently disabled.
-   **Skills Section Removed**: The skills data is not provided by the API, leading to the removal of the skills section from the job cards.
