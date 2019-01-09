# Tetris2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Logical Steps for Tetris Game Play
1. Check if current piece can move down
    1a. if yes - MOVE DOWN
    1b. if no - GENERATE NEW PIECE

MOVE DOWN
1. iterate current board position row index
2. loop over 

GENERATE NEW PIECE
1. call random piece generator
2. calculate starting point for piece grid
3. loop through piece grid and check if piece can fit into starting position
    3a. if yes - set the updated rows
    3b. if no - game over
