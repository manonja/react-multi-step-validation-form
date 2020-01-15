### The App
This App is a proof of concept of a UI that shows a web form to collect some data from a user before signing up for a service.
It covers three stages: 
- a page where the user enters his name, role, email and password through a form that must be valid to move on to the next stage
- a page where the user can choose his privacy preferences 
- a success page. In this stage, informations about the users are printed in the console. 

### Demo
The demo of this app can be found [Here](https://www.youtube.com/watch?v=UZz0rKWBcfA) 

### Deliverables
The deliverables of this proof of concept are the following:

- link to a running web page
- must run in latest Chrome browser
- can be written in any client side programming language, preferably React and Redux
- can make use of any existing open source libraries that don't directly address the problem statement 

### Functionalities
- Show one page of the form at a time (user details, privacy details, success page)
- Show the current page position of the form
- Validate the input fields
- Can go back to the first page to change infos (infos are still filled in)
- If there are any validation errors, show an error message in the form and block progress
- Console.logs the resultant data at the final page

### Technical details
- Front-end built with **React**.
- Styling with **CSS**.
- Testing with **Jest** and **Enzyme**. 

### Packages installed
#### UI
- react-icons
#### Testing
- enzyme 
- enzyme-adapter-react-16 
- react-test-renderer
- jest-enzyme
- babel-jest
- @babel/preset-env
- @babel/preset-react

### Instructions
Clone the project https://github.com/manonja/trayio-fe-test

Go to `trayio-fe-test` repository:
- `npm install` installs package.json 
- `npm start` app serves on http://localhost:3000
- `npm test a` runs all tests
- `npm test u` updates tests

### How to use?
Enter your user details and make sure the fields are valid! Click next until you are done with the signing up process. 

### Wishlist V2 (non-exhaustive)
- Improve form submission: instead of having the validity check on the `next` button, have it on `<form onSubmit={handleSubmit}>` for some reasons onSubmit was not triggered. 
- Make layouts components for `<Button/>`, `<Form/>`, `<NavBar/>`, `Checkbox/>`
- Write more tests, especially to test if the state have been updated correctly

### Author
Manon Jacquin (https://github.com/manonja)
