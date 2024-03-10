# Polaris Blog Website Architecture

## Overview
This web application is built using the Flask framework for the backend and HTML/CSS/JavaScript for the frontend. It serves as a platform for hosting the Polaris blog, incorporating various features such as user registration, article browsing, commenting, and social media integration.

## Database Schema
The database schema consists of several tables to store information about users, articles, comments, and other relevant data. Here's a simplified representation of the schema:

- **Users**
  - id (Primary Key)
  - username
  - email
  - password_hash

- **Articles**
  - id (Primary Key)
  - title
  - content
  - category_id (Foreign Key)
  - author_id (Foreign Key)
  - created_at

- **Categories**
  - id (Primary Key)
  - name

- **Comments**
  - id (Primary Key)
  - article_id (Foreign Key)
  - user_id (Foreign Key)
  - content
  - created_at

## Routes and HTTP Methods

- **GET /**: Renders the homepage, displaying featured articles and navigation options.
- **GET /articles**: Retrieves a list of articles based on specified filters (e.g., category, keyword).
- **GET /articles/<article_id>**: Retrieves a specific article by its ID, along with associated comments.
- **POST /articles**: Creates a new article (accessible only to authenticated users).
- **GET /categories**: Retrieves a list of available article categories.
- **POST /comments**: Creates a new comment on a specific article (accessible only to authenticated users).
- **POST /register**: Registers a new user account.
- **POST /login**: Logs in an existing user.
- **POST /logout**: Logs out the current user.

## Interaction with Web Page Functionality

- The backend routes handle requests from the frontend, fetching and processing data as necessary.
- For example, when a user submits a comment on an article, the frontend sends a POST request to the `/comments` route with the comment content and article ID. The backend validates the request, adds the comment to the database, and returns a success response.
- Similarly, when a user logs in, the frontend sends a POST request to the `/login` route with the username and password. The backend verifies the credentials, creates a session for the user, and redirects them to the homepage if successful.
