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

* Create a file called `api-keys.ts` in the `src/app/` directory and add the following code with your API key information in place of the 'xxx's:
```
export var masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx.firebaseapp.com",
  databaseUrl: "https://xxx.firebaseio.com",
  storageBucket: "xxxx.appspot.com",
  messageingSenderId: "xxxx"
};
```

## User Story

| User Action |      Application Notes      |  
|----------|:-------------:|
| See a list of all projects, ideas, and charitable acts that are seeking funding. |   |
| Click a project to see more details|  |
| Show project details on funding page | |
| Filter projects by funding goal and category| blah|
| Click button to go to project funding form| blah|
| Create new project to fund | blah|
| (Admin) Add, Update, or Delete projects | blah|
| View and create different types of things to fund (charities, projects, etc.) | blah|
| View different types of things (charities, projects, etc.) on different pages | blah|

## Technologies Used
* JavaScript (ES6)
* Angular 2
* Node
* HTML
* SASS
* Firebase
* Angular-CLI
