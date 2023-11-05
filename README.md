# Task Management System

This is a simple web application to assist a user in managing tasks.
A user can:
    - Create an account 
    - Log in to their account
    - View all their tasks
    - Edit a task
    - Create a new task
    - Delete a task
    - Mark a task as completed

## Prerequisites
Have the following prerequisites installed on your system:

- Ruby (version: 2.7.4)
- Ruby on Rails (version: 6.1.7)
- Bundler (version 2.3.22)
- Node.js (version 18.17.1)
- Npm (version 10.0.00)
- SQLite3 (version 1.4)


## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/gloriaoduor/task-manager.git
    cd task-manager
    ```
2. **Install Dependencies:**

    ```bash
    <!-- for backend application: -->
    cd task-manager
    run 'bundle install'

    <!-- for frontend application -->
    cd task-manager/client
    run 'npm install'
    ```
3. **Database Setup:**

    - Create database
    
    ```bash
    <!-- Within task-manager directory: -->
    rails db:create
    rails db:migrate
    <!-- populate db using: -->
    rails db:seed
4. Start the rails server using 'rails s' command on your terminal
5. Start the react application using 'npm start' command on your terminal (ensure you are within the project's directory i.e 'client')
6. Access the front end on your browser [http://localhost:4000](http://localhost:4000x)



