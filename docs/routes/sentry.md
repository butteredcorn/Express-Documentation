# Centralized Error Handling with Sentry.io

## Implementing sentry.io for error tracking

Sentry.io is a simple package that eases the tasks of tracking errors within your work. Sentry.io is commonly used within express as middleware to handle errors while making various forms of requests. Getting started with adding sentry to your express app is relatively simple.

Let's get started!

### Installing sentry for node

There are multiple integrations for sentry inside of numerous coding languages. For our express application, we will use sentry for node. Running the following command inside of your command prompter will install sentry for node.

``` text
npm install @sentry/node
```

### Adding sentry to our server.js file

Once we have sentry installed in our project, we can begin to implement it inside of the file that handles the server itself. The first step would be to require it, like we would do with most things. To do this we must define a variable and set its value to require sentry. By convention, we will call this variable **Sentry**.

### The line should look similar to the following

```javascript
const Sentry = require('@sentry/node');
```

This line of code will go to the top of the file, where all the requires take place.

Once required, we can begin to initiate sentry and add it as middleware to handle errors. One crucial component for success with sentry is the placement of the code that is working with sentry. The next step would be to initialize sentry. We can do this by adding the line ```Sentry.init({ dsn: 'https://<key>@sentry.io/<project>' });``` near the top of the file. Before any controllers are set, we must add the sentry request handler by adding the following line: ```app.use(Sentry.Handlers.requestHandler());```. Then all controllers will come next in your express application.

Once all the controllers are set, we can add the error handler itself into the program. As previously mentioned, placement of the code is a critical factor. The error handler code **must be placed before any other middleware and after all controllers**. The code for this should look similar to this,  ```app.use(Sentry.Handlers.errorHandler());```.

### The server.js file should look similar to the following with sentry.io implemented

```javascript
const express = require('express')
const app = express()
const port = 3000
const Sentry = require('@sentry/node');
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

Sentry.init({ dsn: 'https://<key>@sentry.io/<project>' });

app.use(Sentry.Handlers.requestHandler());

app.use(indexRouter)

app.use(aboutRouter)

app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

## Conclusion

In this module you have learned the essentials of modularizing routes as well as how to implement sentry into your express applications. With this knowledge at the grasp of your hand, you can scale it to be implemented into any of your web projects.
