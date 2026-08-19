# ArtConnect

ArtConnect is a web-based art showcase platform created for CIS 2336. The website allows users to explore local artwork, view upcoming art events, submit artwork, and access frequently asked questions and project references.

The project includes both a front-end interface and a Node.js/Express back end for processing artist submissions.

---

## Features

### Homepage

- Website title and welcome message
- Featured artwork
- Featured event
- Embedded multimedia
- Developer contact information
- Navigation to all website pages

### Gallery

- Displays at least six artworks
- Search functionality using JavaScript
- Category filtering
- Artwork detail and image enlargement modal
- Responsive artwork layout

### Events

- Displays upcoming art events
- Event images, dates, locations, and descriptions
- JavaScript-powered View Details modal

### Artist Submission

- Artist name
- Email address
- Artwork title
- Description
- Category
- Price
- Image selection
- Client-side JavaScript validation
- Field-specific error messages
- Server-side Express validation
- Accepted and declined submission responses

### FAQ

- Frequently asked questions
- JavaScript expand-and-collapse functionality

### References

- Image sources
- Multimedia sources
- External resources
- AI prompts used during development

---

## Technologies Used

### Front End

- HTML5
- CSS3
- JavaScript

### Back End

- Node.js
- Express.js

### Development Tools

- Visual Studio Code
- Git
- GitHub
- GitHub Pages

---

## Project Structure

```text
sohail-danial-cis2336-project
│
├── frontend
│   ├── index.html
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── script.js
│   ├── images
│   └── pages
│       ├── gallery.html
│       ├── events.html
│       ├── submit.html
│       ├── faq.html
│       └── references.html
│
├── backend
│   ├── controllers
│   │   └── submissionController.js
│   ├── routes
│   │   └── submissionRoutes.js
│   ├── views
│   │   ├── confirmation.html
│   │   └── decline.html
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## Backend Overview

The ArtConnect backend uses Node.js and Express.js to process data submitted through the Artist Submission form.

The Express server performs the following tasks:

- Serves the front-end files
- Uses middleware to parse submitted form data
- Handles POST requests from the Artist Submission form
- Performs server-side form validation
- Redirects valid submissions to a confirmation page
- Redirects invalid submissions to a decline page
- Provides feedback when submitted information is invalid
- Uses separate controllers, routes, and views for code organization

---

## Server Setup

The backend server is created using Node.js and Express.js.

The server runs on port 3000:

```javascript
const PORT = 3000;
```

Express also serves the files located inside the frontend directory:

```javascript
app.use(express.static(path.join(__dirname, "../frontend")));
```

This allows the front-end website and backend server to work together through the same local server.

---

## Backend Routes

### GET `/api/test`

This route is used to verify that the Express server is running correctly.

Example response:

```text
ArtConnect backend is working.
```

### POST `/submit-artwork`

This route receives information submitted through the Artist Submission form.

The submitted information includes:

- Artist name
- Email address
- Artwork title
- Artwork description
- Category
- Price

The POST request is processed by the submission controller.

If the submitted information passes server-side validation, the user is redirected to the submission confirmation page.

If the submitted information fails validation, the user is redirected to a decline page.

### GET `/submission-status`

This GET route displays the appropriate submission status page.

An accepted submission displays the confirmation view.

### GET `/decline/:reason`

This GET route displays feedback when the server rejects a submission.

Possible decline reasons include:

- Missing required information
- Invalid email address
- Invalid price

---

## Middleware

The Express server uses middleware to process URL-encoded form data.

```javascript
app.use(express.urlencoded({ extended: true }));
```

This middleware allows Express to read submitted form values using:

```javascript
req.body
```

The middleware processes the incoming Artist Submission form data before the controller validates it.

---

## Form Handling and Data Processing

The Artist Submission form sends its information to the Express backend using a POST request.

The form uses:

```html
<form id="artist-form" action="/submit-artwork" method="POST">
```

After the client-side JavaScript validation succeeds, the form is submitted to the `/submit-artwork` route.

The backend then processes and validates the submitted information.

This provides both client-side and server-side validation.

---

## Server-Side Validation

Artist submissions are validated by the server even though client-side JavaScript validation is also included.

Server-side validation checks for:

- Missing artist name
- Missing email address
- Missing artwork title
- Missing artwork description
- Missing category
- Invalid email address
- Invalid price
- Negative price values

If required information is missing, the submission is declined.

If the email address is invalid, the submission is declined.

If the price is entered and is not a valid positive number, the submission is declined.

Valid submissions are redirected to the confirmation page.

Server-side validation provides an additional layer of data validation if client-side validation is bypassed.

---

## Backend Code Organization

The backend is separated into multiple directories to make the code easier to understand and maintain.

### Controllers

The `controllers` directory contains:

```text
submissionController.js
```

The submission controller processes the Artist Submission form data and performs server-side validation.

### Routes

The `routes` directory contains:

```text
submissionRoutes.js
```

The submission route handles POST requests sent to:

```text
/submit-artwork
```

The route sends the request to the submission controller for processing.

### Views

The `views` directory contains:

```text
confirmation.html
decline.html
```

`confirmation.html` is displayed after a valid submission.

`decline.html` is displayed when submitted information does not pass server-side validation.

---

## Installation and Running the Project

Node.js must be installed before running the backend.

### 1. Clone or Download the Repository

Download or clone the project repository to your computer.

### 2. Open the Project

Open the project folder in Visual Studio Code.

### 3. Navigate to the Backend Folder

From the project root directory, run:

```bash
cd backend
```

### 4. Install Dependencies

Run:

```bash
npm install
```

If Windows PowerShell prevents the `npm` command from running because of its execution policy, use:

```bash
npm.cmd install
```

The required packages are installed based on `package.json`.

### 5. Start the Express Server

Run:

```bash
node server.js
```

The terminal should display:

```text
Server running at http://localhost:3000
```

### 6. Open the Website

Open the following address in a web browser:

```text
http://localhost:3000/
```

The Artist Submission page can be accessed at:

```text
http://localhost:3000/pages/submit.html
```

---

## Testing

The project was tested for the following functionality:

- Express server startup
- Front-end pages served through Express
- Basic backend test route
- Gallery search functionality
- Gallery category filtering
- Gallery artwork details modal
- Event details modal
- FAQ expand-and-collapse functionality
- Artist Submission client-side validation
- Field-specific form validation errors
- Artist Submission POST request
- Express form-data middleware
- Server-side form validation
- Accepted submission response
- Missing-field decline response
- Invalid-email decline response
- Invalid-price decline response

The server-side validation was also tested independently to verify that invalid information is rejected even when client-side validation is bypassed.

---

## Git Usage

Git and GitHub were used throughout development to track project changes and maintain version control.

Commits were made during development for changes including:

- Initial project structure
- Front-end development
- Gallery functionality
- Event functionality
- Form validation
- Front-end corrections
- Backend implementation
- Express routing
- Server-side validation
- Backend documentation

The `node_modules` directory is excluded from the GitHub repository using the `.gitignore` file.

Dependencies can be restored after cloning the repository by running:

```bash
npm install
```

---

## Developer Documentation

The project is divided into a `frontend` directory and a `backend` directory.

Front-end code contains the website interface, styling, and client-side JavaScript.

Backend code contains the Express server, routes, controller, views, middleware, and server-side validation.

This organization separates the user interface from server-side processing and makes the project easier to maintain and expand.

---

## Developer

**Danial Sohail**

CIS 2336 Web Project