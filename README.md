# starwars-api

An application that provides API endpoints for listing Star Wars movies with their names and other details, adding and listing anonymous comments for a movie, and getting the character list for a movie.

---

## Built With

- Node.js
- PostgreSQL
- Git
- Express
- Mocha, chai and supertest
- Postman

## Requirements

You will need Node.js (version 14 and above) and a node global package installed in your environment.

### Node

- #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

    ##### Installation Commands

        $ sudo apt install nodejs
        $ sudo apt install npm

- #### Other Operating Systems

    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
    If the installation was successful, you should be able to run the following command.

    ##### Verify versions

        $ node -v
        v14.17.5
        $ npm -v
        6.14.14

---
## Clone this project

    $ git clone https://github.com/lawrecks/starwars-api.git
    $ cd starwars-api
    
## Install dependencies
    $ npm install

## Configure app

- Create a file named `.env` in the project root directory then add url to your db to connect your Database. 
- Add the other environment variables as described in the `.env.example` file


## Running migrations

    $ npm run migrate:up

## Running this project locally

    $ npm run dev

## Running tests

    $ npm test


## Documentation

Postman: https://documenter.getpostman.com/view/10148336/UVXnJF7g


## Show your support

Give a ⭐️ if you like this project!

## Copyright

Copyright (c) 2021 Ugochukwu Ejiogu
