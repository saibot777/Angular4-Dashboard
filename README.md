# Angular Developer Task

The assignment requires the development of a small application to manage a set of bank cards which a user owns. We will be only assessing the design and implementation of the app provided the following terms are also met:
- Angular 2 or 4.x is used
- WebPack is optional, but preferable as a solution to transform and bundle the written code
- TypeScript is optional, but preferable
- A small set of unit tests to compliment the implementation below.

### Model
For the purpose of this task, the following two models will be required:
- An `Account`, bearing the following fields:
  - username
  - password
  - full name
- A `Card`, bearing the following fields:
  - card name
  - card number
  - expiry date
  
An `Account` may own multiple `Card` instances in the app. `Card` instances should have a unique `card name`.

Any means of storage and data management is accepted (we recommend Local Storage as the easiest solution).

###Landing Page
This will be the first page that the user will be visiting, and must have the following features:
- Allow users to register an account.
- Sign into the account using standard username-password credentials.
- Sign out of the account.

###Dashboard Page
This is the page that the user should see after registration/sign-in, and should have the following functionality:
- create a card and bind it to the account
- show all the card and their details which that account currently owns
- delete a card
- update the card alias, and expiry date

###Decorator
The application should have a footer that is common to all protected and unprotected pages, and a header that is common to all protected pages, exposing navigation between pages and account logout.

###Some other conditions and tips
- **Important!** The app should forbid users to access _protected pages_ unless the user is authenticated. 
- Do not bother styling the pages for the sake of aesthetics! Functionality and technical design is what we are after.

_Questions? Feel free to reach us at job@entropay.com and we will do our best to reply as soon as possible._

# Task build

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Instructions:

## Install Node(or update to latest)

## run in console: "npm install -g @angular/cli" 

## cd into the app, open console: "npm install"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
