### General Info

//structure

src
-api
-components
-store
-utils
-views

In the api folder we find the api config and the file that contains the request functions, in the components folder are all the components used by the project and shared. In the store we have the store configuration where the redux, reducers and persister. In this project we used the reduxjs/toolkit library to manipulate redux, using CreateSlice.
In the utils folder was placed the file with all the utils functions and together we have the date_utils.test.ts file with the unit tests of this file.
Finally, we have the views folder that contains the two pages used in the project, the listing and the movie information. In src/App.tsx you will find the project routing.

A .env.development file was created with two constants that are the api_token and the timeOut of the request, and in the src/config.ts file these environment variables are exported. The react project when run by doing npm start will execute the environment variables.

//UI operation

The application starts from the list of recent movies. We have four ways to search our list of movies by recent, popular, favorites and by year. The year search works in conjunction with the three listings (recent, popular and favorites).
Hovering over a movie, the title and release date are displayed over the movie, if the release date is for the current year it indicates when the movie was released or is still to be released.
Clicking on a movie is redirected to another page with detailed information about the movie. On this page there is an icon with a heart shape, if clicked it will add the movie to the favorites list. To go back, simply click on the browser's back button. And you can go to the favorites list to confirm that your movie you just added is in the list.
In the list of movies is visible the infinite scroll.

### Technologies

node.js v16.13.0
React v17.0.2
Typescript v4.5.5
react-redux v7.2.6
reduxjs/toolkit v1.7.1
redux-persist v6.0.0
sass v1.49.7
react-router-dom v6.2.1
@mui/material v5.3.1
@testing-library/react v12.1.2
moment v2.29.1
axios v0.25.0

### Installation

To install the project you can clone (https://github.com/telmoruben1/challenge-movies.git) the project in visual studio code and you will have to run the npm install command to install the node modules dependencies and then just do npm start and the project runs.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
