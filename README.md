# DockerAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

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

# helloAngularApp

Commands to run node docker:

Docker build
#docker build -t angular_app --build-arg HTTP_PROXY=http://proxy-wsa.esl.cisco.com:80 --build-arg HTTPS_PROXY=http://proxy-wsa.esl.cisco.com:80 .
docker build -t angular_app .

Docker run
docker run -it -p 84:80 -d $(docker images --filter=reference=angular_app --format "{{.ID}}")

Docker tag
docker tag -t $(docker images --filter=reference=angular_app --format "{{.ID}}") varkh16/angular_app:latest

Docker login
docker login -u varunkh16 -p N1nj@*89

Docker push
docker push varkh16/angular_app