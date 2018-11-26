
## Overview

This repository was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has since been ejected from Create React App to use SCSS.

For help with React, please consult the Create React App docs.

## Available Scripts
In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

You need to **put or import any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

The build is minified and the filenames include the hashes.<br>

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>

Only files inside `public` can be used from `public/index.html`.<br>

## Fonts and styling
All styling files can use the .scss extension. When building, Webpack preprocesses those files into regular CSS.<br>
Brown, our brand font, has been imported as the default parent font. As our brand develops, this repository can be updated to match our brand's style guide.

## React Router
For easy client-side routing, React Router has been added to this project and is wrapping the main app component. If your project doesn't require any navigation, you can edit the index.js file to remove the Router.

For more information about React Router, visit the [documentation](https://github.com/ReactTraining/react-router).
