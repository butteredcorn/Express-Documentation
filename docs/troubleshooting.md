# Troubleshooting Guide

While following this guide, you may run into one of many common problems. We hope to provide at least some guidance for you, should you run into the following problems:

#### app.listen() TypeError

If you are getting the following Type Error when trying modularize the [app.listen()](https://expressjs.com/en/api.html#app.listen) function:

```bash
TypeError: Cannot read property 'listen' of undefined at Object.<anonymous> (<PATH>)
```

Ensure that your app.js file is returning your app like so:

```javascript
module.exports = function () {
    const express = require('express')
    const app = express()

    //server code here
    
    return app
}()
```

To understand why, simply take a closer look at what is happening in this code block. We have wrapped our app.js file in an anonymous function that is immediately invoked with the parentheses at the bottom. If no return statement existed, essentially the app.js file will run, but not return anything, and since nothing is returned, the 'nothing' is defaulted to ```undefined``` and thus you get this particular error.

#### app.use() TypeError

If you are getting the following Type Error when trying to implement [router.get()](https://expressjs.com/en/guide/using-middleware.html#middleware.router):

```bash
TypeError: app.use() requires a middleware function at Function.use (<PATH>)
```

Ensure that your route.js file is properly exporting the router with:

```javascript
module.exports = router
```

This error message is more cryptic since Node.js is unable to trace the error to the problem file.

>Note: App.use() always expected some sort of application level argument such as telling it to use a middleware.

#### res.sendFile() TypeError

If you are getting the following Type Error when trying to use [res.sendFile()](https://expressjs.com/en/api.html#res.sendFile):

```bash
TypeError: path must be absolute or specify root to res.sendFile [failed to parse ...]
```

Ensure that you are [passing in an absolute path or a reference to the root directory](https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed).

>Note: .sendFile() was added to Express.js from v4.8.0 onwards. Earlier versions will not have any references to .sendFile().

#### Values From Variables Passed to an EJS File Fails to Render to Front End

If you notice that the values for variables you are passing to your ejs files fail to show up when you try to access the HTML page in your browser, check to ensure that you are using the proper [EJS syntax](https://ejs.co/#docs), such as using the equal sign operator after the opening angle bracket and percentage sign like so:
```HMTL
<%= variable >
```

Failing to use the equal sign operator will simply give you access to the variable, but will not convert it to HTML for you.

Consider the following code:

```HTML
<% console.log(variable) %>
```

The variable value will be logged to the console, but nothing will be rendered to the front end.

This issue can be particularly frustrating since EJS is a templating language, and you will not be notified of these types of issues.



