# DocumentsXpress

Challenge available at [Challenge Link](https://github.com/weareswat/challenges/blob/master/2-frontend/react-challenge.md).

## Tech Stack

* HTML5
* [SASS](https://sass-lang.com/)
  > Mainly used for global variables, such as primaryColor and secondaryColor.
  > Installation: `npm install node-sass`
* [Bootstrap](https://getbootstrap.com/)
  > Used throughout the application, as the backbone structure for the styling.
  > Installation: `npm install react-bootstrap bootstrap`
* [React](https://reactjs.org/)
  > No need for introduction.
  > Installation: `npx create-react-app invoicexpress`
* [Enzyme](https://airbnb.io/enzyme/)
  > Used for all the component testing. Facilitates the unit testing for all methods and elements in each component.
  > Installation: `npm i --save react@16 react-dom@16` and `npm i --save-dev enzyme enzyme-adapter-react-16`

## Preview

![Preview](/src/assets/resources/preview.gif)

## Organization

The application is organized in four main components:

* App.js
  > Main component, integrates all the sub-components of the application.
  * List.js
      > Responsible for displaying the main list.
  * Filter.js
      > Responsible for filtering the list of documents (assets/resources/documents.json) using the inputs and selections available on the header of the application. After filtering the list of documents, it propagates the filteredDocuments to all the components.
  * Pagination.js
      > Responsible for the pagination structure. Besides displaying the pagination on the bottom of the application, when the list of documents is filtered, or when the user chooses a different page, the component propagates de currentPage to the remaining components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Latest test results

![Test Results](/src/assets/resources/test_results.png)

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
