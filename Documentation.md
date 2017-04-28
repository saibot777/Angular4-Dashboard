# Angular Developer Task Documentation

## Tech Used: Angular 4x, AngularCLI with Webpack, FlexBox(css), Unit-Testing(Karma with Expect, Jasmine)

Code structure of the app

## Logic(Business Logic) and Core Structure

### In folder "backend" you will find mocking localStorage methods, interfaces/models, validations...
### "fw" folder contains dinamic forms used for crud card operations 
### Folder "app" contains site app layout structure with Auth and Data Services that receives data from backend and inject where called

## UI

### In 'fw' folder are services and directives that manipulates the UI(responsiveness, support for all devices, compatibility...), some logic is here also, another purpose of this folder is to demonstrate code reusability, fw is independent.

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