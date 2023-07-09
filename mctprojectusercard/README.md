## User Profile Display with React Context API
This project aims to build a single page using React that displays the profiles of 10 users. The user data will be obtained from an open API. Each user's profile will include an avatar picture, name, email, phone, address, website, and company name. Additionally, there will be three action buttons beneath each profile: like, edit, and delete.

## Features
Display profiles of 10 users with the following information:
Avatar picture
Name
Email
Phone
Address
Website
Company name

## Action buttons for each profile:
1)Like: Toggles the like status of the profile.
2)Edit: Opens a modal window to edit the profile information.
3)Delete: Prompts for confirmation before deleting the profile card.

## Technologies Used
To implement this project, the following technologies will be used:

React: JavaScript library for building user interfaces.
React Context API: To manage and share the application state across components.
API: The user data will be obtained from an open API. The specific API to be used will be determined during development.

## Development Process
Fetch user data from the selected API.
Create a React component to display the user profiles.
Implement a Context Provider to manage the application state.
Use the Context API to provide the user data to the profile component.
Create a separate component for each user profile, including the avatar picture, name, email, phone, address, website, and company name.
Implement functionality to toggle the like status of a profile.
Implement a modal window component to display the information of the edited profile and allow users to make changes.
Implement a confirmation popup component for deleting a profile.
Deploy the application to a hosting platform.


## Conclusion
This project aims to build a single page using React that displays user profiles obtained from an open API. Users can interact with the profiles by liking, editing, and deleting them. The project will utilize React's Context API to manage and share the application state across components, providing a seamless user experience for managing the profiles.

## Sources

1) https://jsonplaceholder.typicode.com/users --> API for users details
2) https://avatars.dicebear.com/v2 --> Base Url for getting the Avatars according to user's names 




