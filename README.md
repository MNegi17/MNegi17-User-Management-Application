# User Management Application 

This User Management Application is a CRUD (Create, Read, Update, Delete) system built with React, designed to interact with a mock API for managing user data. The application demonstrates key functionalities that are essential in real-world user management systems, such as retrieving, displaying, creating, updating, and deleting user information.

# Features:
- Fetch Users: The application fetches a list of users from the JSONPlaceholder API and displays them in a responsive table. Each user’s name, email, and phone number are shown along with action buttons for editing, deleting, or viewing more details.

- Create New User: A user form is provided to create new users. While the mock API doesn't persist this data, the application simulates the process by adding the user to the existing list.

- Update User: Each user has an "Edit" button that opens a form pre-filled with the user's information, allowing updates to be made. The updates are sent via a PUT request to simulate the process.

- Delete User: Users can be removed by clicking the "Delete" button, which sends a DELETE request to the API and removes the user from the display.

- View User Details: Clicking on "View" takes the user to a detailed view page where they can see more information about the selected user
