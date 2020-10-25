# AXA Node.js Rest API


Install dependencies:
```
yarn install
```
Run development server with nodemon:
```
nodemon
```
Run tests with jest:
```
npm run test
```

The server's default port is ``3000``. You can change it by editing the ``PORT`` variable inside the ``.env`` file located in the root folder.

This REST API was written in TypeScript, enabling ES6 features out of the box, optional type checking and much more. This allows scaling more smoothly in the future.

The project structure has modular routes and controllers for better scalability.

## API documentation
On your local server, open the route ``/api-docs`` to read the Swagger API documentation of this REST API.