# PartNerd

![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
You can find the official version of this deployed project at [PartNerd](https://partnerd.dev).

---

**PartNerd** is an application that allows **project owners** and people with great ideas to add new projects to a database, an algorithmic controlled marketplace in order to match them with registered **web developers** who've built their matching profiles.

[Deployed Front End (Staging)](https://heuristic-aryabhata-7edf28.netlify.com)
<br />

## Code Climate Score

[![Maintainability](https://api.codeclimate.com/v1/badges/6cb88c1d56b485753fa4/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/nusite-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6cb88c1d56b485753fa4/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/nusite-fe/test_coverage)

## Contributors

|[Bradley Pitts](https://github.com/BPitts8019)| [Stephen Tanksley](https://github.com/StephenTanksley) | [Joe Medrano](https://github.com/JoeLorenzo) | [Andrew Speer](https://github.com/nottolivc) | [Tara Sherman](https://github.com/taraSherman)| [Danielle Baxter](https://github.com/danibaxx)| [Raymond Thurman](https://github.com/raythurman2386)|
<br>
<br>

## Project Overview

[Trello Board](https://trello.com/b/21H7zKuh/labspt8-nusite)

[Product Canvas](https://www.notion.so/87825689686d4811bc47cb0c935ff97e?v=75519784b4d543ea992186db6baaed48)

### Key Features

## Tech/frameworks used:

<b>Built with:</b>

-  [React](https://reactjs.org)
-  [Typescript](https://www.typescriptlang.org/)
-  [ContextAPI](https://reactjs.org/docs/context.html)
-  [Material UI](https://material-ui.com/)

Why did you choose this framework?

-  Scalability
-  TS Forces clean DRY code
-  Agile scalable components with MUI
-  Agile dev environment works well with React

#### Front end deployed to `AWS` (https://partnerd.dev)

## Client Installation

```
git clone [repo]
cd [repo]
npm install
npm start
```

#### [Back end](https://partnerd-staging.herokuapp.com/) built using:

-  [Express](https://expressjs.com/)
-  [PostgreSQL](https://postgresql.com/)
-  [GraphQL](https://graphql.org)
-  [Node.js](https://nodejs.org)

#### GraphQL framework and API

#### Staging Backend delpoyed at [Heroku](https://partnerd-staging.herokuapp.com/) <br>

#### Master Backend delpoyed at [Heroku](https://partnerd-master.herokuapp.com/) <br>

## Getting started

To get the server running locally:

-  Clone this repo
-  **npm install** to install all required dependencies
-  \*\*npm run build to build only if you would like to run the start script, otherwise:

-  **npm run server** to start the local server
-  **npm test** to start server using testing environment
-  **npm run coverage** to see test coverage

### Backend frameworks

Node, Express, TypeScript, GraphQL, Apollo-Server

-  TypeScript to make a theoretically less error prone backend
-  GraphQL for it's performance
-  Apollo-Server is used to help communicate with the frontend of the application

## Endpoints

With the nature of GraphQL, you will only have one endpoint, with the exception of the welcome route

| Method | Endpoint   | Description                           |
| ------ | ---------- | ------------------------------------- |
| GET    | `/`        | all users                             | Welcome route to the API |
| POST   | `/graphql` | graphql endpoint to test your queries |

# Data Model

#### USERS

---

```
{
  id: INT
  username: STRING (unique)
  first_name: STRING
  last_name: STRING
  company: STRING (optional)
  password: STRING
  email: STRING (unique)
  dev_experience: INT (optional)
  dev_education: INT (optional)
}
```

---

#### PROJECTS

---

```
{
  id: INT
  project_name: STRING
  project_avatar: STRING
  project_description: STRING
  project_owner: INT (optional)
  project_developer: INT (optional)
  completed: BOOLEAN
  marketplace: BOOLEAN
  showcase: BOOLEAN
}
```

---

## Queries

---

```
query {
  users {
    first_name
    last_name
    username
    email
  }
}

query {
  projects {
    project_name
    project_avatar
    project_description
  }
}

query {
  user(id: 1) {
    first_name
    last_name
    username
    email
  }
}

query {
  project(id: 1) {
    project_name
    project_avatar
    project_description
  }
}

query {
  users {
    username
    projects {
      project_name
    }
  }
}

query {
  projects {
    project_name
    project_owner {
      username
    }
  }
}

query {
  projects {
    project_name
    project_developer {
      username
    }
  }
}
```

---

#### Mutations

---

```
mutation {
  signup(
    username: "test"
    first_name: "test"
    last_name: "test"
    email: "test@partnerd.com"
    password: "test"
  ) {
    token
    user {
      username
      first_name
      last_name
      email
    }
  }
}

mutation {
  login(
    email: "test@partnerd.com"
    password: "test"
  ) {
    token
    user {
      username
      first_name
      last_name
      email
    }
  }
}
```

---

## Payment API

[Stripe API](https://stripe.com/)

## Environment Variables

_ DB_HOST - typically set to localhost for your localdb
_ DB_NAME - name specified when creating your

-  DB_USER - set to postgres unless otherwise specified
-  DB_PASS - set to your local db password
-  JWT_SECRET - secret key for JWT hashing

# Content Licenses

For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

Document what you used for testing and why

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

#### Pull Request Guidelines

-  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
-  Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
-  Ensure that your code conforms to our existing code conventions and test coverage.
-  Include the relevant issue number, if applicable.
-  You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See nusite-be repository README for additional details on the backend of our project.
