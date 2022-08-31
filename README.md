# Folksoul REST API

API for folksoul application

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Authentication](#authentication)
- [Response Structure](#response-structure)

#

### Prerequisites

- <img src="./readme/assets/node.svg" height="17" style="position: relative; top: 2px"/> _Node JS @12.X and up_
- <img src="./readme/assets/npm.png" height="16" style="position: relative; top: 5px"> _npm @6 and up_
- <img src="./readme/assets/mongodb.png" height="17" style="position: relative; top: 5px"> _Mongodb database locally or on atlas_

#

### Tech Stack

- <img src="readme/assets/typescript.png" height="20" style="position: relative; top: 4px" /> [Typescript @4.7.4](https://www.typescriptlang.org/) - Superset of Javascript
- <img src="readme/assets/express.png" height="20" style="position: relative; top: 6px" /> [express @4.18.1](https://expressjs.com/) - Web framework for Node.js
- <img src="readme/assets/mongoose.png" height="20" style="position: relative; top: 6px; margin-right: 5px" /> [mongoose @5.10.19](https://mongoosejs.com/) - Mongodb object modeling for Node.js
- <img src="readme/assets/dotenv.png" height="20" style="position: relative; top: 6px; margin-right: 5px" /> [dotenv @16.0.1](https://www.npmjs.com/package/dotenv) - Environment variable management tool
- <img src="readme/assets/jwt.svg" height="20" style="position: relative; top: 6px; margin-right: 5px" /> [jsonwebtoken @8.5.1](https://jwt.io/) - JSON Web Token
- <img src="readme/assets/swagger.png" height="20" style="position: relative; top: 6px; margin-right: 5px" /> [swagger-ui-express @4.5.0](https://swagger.io/) - API description tool
- <img src="readme/assets/joi.png" height="20" style="position: relative; top: 6px; margin-right: 5px" /> [joi @17.6.0](https://joi.dev/) - Data validator for JavaScript

#

### Getting started

**To get the API running locally you need to follow the steps below:**

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/folksoul-api-otomamatsashvili.git
```

2\. Next step requires installing all the dependencies:

```sh
npm install
```

or

```sh
yarn install
```

3\. Then copy env example file. You should fill environment variables in .env with your needs:

```sh
cp .env.example .env
```

4\. After that you can run the local server in development mode:

```sh
npm run dev
```

or

```
yarn run dev
```

#

### Project Structure

Take into account that `index.js` files are used to export other files from folders and example files in given structure, describe file naming pattern in each folder.

```bash
├─── src/
│   ├─── bin/     # scripts for command line
│   ├─── config/  # configuration files
│       ├─── example.ts
│       ├─── index.ts
│   ├─── controllers/  # controller functions
│       ├─── example-controller.ts
│       ├─── index.ts
│   ├─── middlewares/  # middleware functions
│       ├─── example-middleware.ts
│       ├─── index.ts
│   ├─── models/   # mongoose collection models
│       ├─── Example.ts
│       ├─── index.ts
│   ├─── routes/   # route definitions for api
│       ├─── example.ts
│       ├─── index.ts
│   ├─── schemas/  # joi validation schemas
│       ├─── example-schema.ts
│       ├─── index.ts
│   ├─── types/    # typescript types
│       ├─── example-schema.ts
│       ├─── index.ts
│   ├─── server.ts     # entry point to application
├─── readme/           # readme assets
├─── .env.example      # environment variables example
├─── .eslintrc.json    # eslint config file
├─── .prettierrc.json  # prettier config file
├─── .gitignore        # ignored files for git
├─── babel.config.json # typescript to javascript convert config
├─── package.json      # dependency management
├─── readme.md         # github readme file
├─── tsconfig.json     # ignored files for git

```

#

### Deployment

**API is deployed on digitalocean linux server with `ngnix`. You can view its detailed documentation [here](https://folksoul-api.otar.redberryinternship.ge/api-docs/)**

**To deploy API on your server, you need to follow the steps below:**

1\. First of all you need to clone repository from github on server:

```sh
git clone https://github.com/RedberryInternship/folksoul-api-otomamatsashvili.git
```

2\. Next step requires installing all the dependencies:

```sh
npm install
```

or

```sh
yarn install
```

3\. Then copy env example file. You should fill environment variables in .env with your needs:

```sh
cp .env.example .env
```

4\. After that you should covert typescript codebase to browser friendly javascript code:

```sh
npm run build:prod
```

or

```
yarn run build:prod
```

5\. And finally you can run the server:

```sh
npm start
```

or

```
yarn start
```

#

### Authentication

Requests are authenticated using the Bearer Authorization header with a valid JWT. JWT token is given to a user after successful login. Users can only be added from production server by running command: `npm run add:admin` and providing new user data.

#

### Response Structure

All JSON responses across the whole API share the same [JSend](https://github.com/omniti-labs/jsend) specification.
