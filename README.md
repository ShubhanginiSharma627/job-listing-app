# Job Listing Platform

This project is a React-based job listing platform that allows users to filter and apply for jobs. It utilizes Material-UI for styling and Redux for state management, making it both visually appealing and functionally robust.

## Features

-   **Job Listings**: Users can view a list of jobs fetched from a backend API.
-   **Filters**: Users can filter jobs based on various criteria such as company name, role, location, experience, and salary. Due to API limitations, some expected filters like tech stack are not currently functional.
-   **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/job-listing-platform.git
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

## Known Issues

-   **Tech Stack Filter Not Working**: Due to the absence of tech stack data in the API response, the filter functionality for tech stacks is currently disabled.
-   **Skills Section Removed**: The skills data is not provided by the API, leading to the removal of the skills section from the job cards.
