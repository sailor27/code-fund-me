# CodeFundMe

A crowd-funding platform built using Angular 2 and Firebase.

### _By Ginger Lee Kretschmer, Sailor Winkelman, and Sam Kissee_


## Installation

1. _`$ git clone` [] _

2. _`$ cd code-fund-me`_

3.  _`$ npm install -g angular-cli`_

4. _Add Firebase API Key (instructions in next section)_

5. _`$ ng serve --open`_

## Firebase API key

This app requires the use a Firebase api key to access Firebase database features. You can acquire one of your own to use when running this project by visiting the [Firebase Website](https://firebase.google.com) and signing up for an account before taking the following steps:

* Add a new project (you'll have to name it).

* Once your new project is created, click the gear icon next to Project Overview to access your project settings.

* Click the button that says "Add Firebase to your web app" and copy the information from the modal window that pops up.

* Create a file called `api-key.ts` in the `src/app/` directory and add the following code with your API key information in place of the 'xxx's:

export var masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseUrl: "https://xxx.firebaseio.com",
  storageBucket: "xxxx.appspot.com",
  messageingSenderId: "xxxx"
};

* Import the projects.json file from `src/assets` into the projects Data Page on Firebase to use our pre-made project data.



## User Story

### Current Functionality

| User Action |      Application Notes      |  
|----------|:-------------:|
| See a list of all projects that are seeking funding. | Pulls database list using service  |
| Click a project to see more details| Dynamic route by id |
| Show project details on funding page | Get details from database by id using service |
| Filter projects by funding goal and category| Pipe by goal and category |
| Click button to go to project funding form| Dynamic route|
| Submit amount to fund to decrease funding goal | Use service on fund form to subscribe to database entry by id on initialization. Collect payment amount on click and pass into onAmount method, where goal property is defined to the goal minus the payment amount.|
| Create new project to fund | Model input to Project object and send to DB using service|
| Update project details on Admin Route | Change inputs in view using NgModel. Pass down selected project data from directory, receiving using @Input. Send changed data to database entry (by id), using update()|
| Add project on Admin Route | Model input values by # to Project object. Push new project object into database list observable to add to database. Static route back to directory page to show new project in view. |
| Delete project on Admin Route | Method is in edit-project component. Pass down selected project data from directory, receiving using @Input. Send selected project to delete to database list (by id), using delete(). |


### Future Functionality

| User Action |      Application Notes      |  
|----------|:-------------:|
| View and create different types of things to fund (charities, projects, etc.) | Create and integrate Charity and other classes to model data.|
| View different types of things (charities, projects, etc.) on different pages | Dynamically route to a charities page, which uses a pipe to show only database objects with Charity type.|

## Technologies Used
* JavaScript (ES6)
* Angular 2
* Node
* HTML
* SASS
* Firebase
* Angular-CLI
