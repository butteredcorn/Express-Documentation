# How to create a basic web server using express

## Setting up the Environment for the Server

This tutorial makes heavy use of nodejs. If you do not have nodejs installed, follow [this link](https://nodejs.org/en/download/) then return to this markdown. Assuming you have node.js already installed, use the command prompt to create a new folder within your desired directory. This folder will be the location of your express server.

### The commands should look similar to the following

![Command Prompt](images/setup.png?raw=true "Command Prompt")

## Installing npm and express

The next step would consist of you continuing to use the command prompt on your computer and running a series of commands. Once the directory and file have been created, run the command **npm init**.

The initializer command, **npm init**, creates a package.json for your application. This command prompts various questions regarding your application. In most cases, you can simply and continuously hit the return key. Doing this accepts the defaults for most of the questions that have been prompted.

### The command should look similar to the following

![npm init](images/npm_init.png?raw=true "npm init")

Once this command has been ran, and you have created a package.json, you may proceed to installing express itself. To install express, run the command **npm install express**.

### The next command should look similar to the following

![npm install express](images/npm_install_express.png?raw=true "npm init")

## Using Express to Host a Web Server

Now that we have everything prepared to create our web server with express, we can being to write some code to bring our server to life.

First, create a javascript file. This is where you will write the code to bring your server into existence. Open the file with your favorite code editor. The first line in your file should consist of requiring express.

### The line should look similar to the following

```javascript
const express = require('express')
```

The subsequent line in your file should be setting the express function to a variable. Doing this allows that variable to have access to all the built in functionalities that come with the express function. Conventionally, this variable is named **app**. The final variable that we will be defining, for now, is the port. To define the port, we will set a variable named **port** to equal a port of your choice. For this case we will use port 3000.

### Your code should look similar to the following

```javascript
const express = require('express')
const app = express()
const port = 3000
```

The next portion of the code defines the body, or routes, for our express application. To create the simplest route possible, we will try to serve the words *"Hello World"* on our server.

The line `app.get('/', (req, res) => res.send('Hello World!'))` does just that. To break down this line of code, **app.get()** is a convenience method tied to express' application routing system. It helps by aligning responses to requests more precisely. Inside of **app.get()**, we have the path, as well as what we want to serve on that page. In this case we have **/** as our path. This is the default path for when you first traverse to see your server in action, in the browser. Following the path, we have a callback function which defines what will be displayed on the web page. In our case, we want to show the words *Hello World*. `(req, res) => res.send('Hello World!')` does exactly that.

### Your code should now look similar to the following

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
```

To finish off this simple express server, we need to serve the content to the port we defined in the third line. The line method we need to use in this scenario is **app.listen()**. Inside of this method, we will put in our pre-defined port as well as a callback function printing a sentence to the terminal letting you know where the server is being hosted on.

With all the code included in your file, you now have developed a basic web server. To see the content deployed on the web server, navigate to **localhost:3000**, or which ever numeric value you have set your port to, on your web browser.

### The following code will create a web server and show the words **Hello World**

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```


## section 2 -- REFACTORING

```javascript
module.exports = (database) {
    const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

return app
}(null)


file 2:
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

```
## own module 2 -- REFACTORING


## Creating Controllers on the Server

As of now, our code only shows the words **Hello World** on our page, which was pre-baked inside of the same file where we created our server. In this section we will uncover a way to serve static content on our web server.

We can use another method inside of express called **app.use()**. We can use **app.use()** to serve content, like an html file, on your web server. For this example, we will create an html file and serve it on our web server.

First create a folder inside of your current directory named **public**. This folder will hold all the static content, and is named **public** by convention. 

### The html file can be whatever you desire, for our example it will be called index and only include a header

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>static content</title>
</head>
<body>
    <h1>Good afternoon</h1>
</body>
</html>
```

With the public folder and html file created, we can add code to serve that path on your web server. The line can look something like: `app.use(express.static('public'))`. This line of code takes all the files within the public folder and deploys it on our server.

### Your code should look something like this with the newly added line

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

### The url should look something like this to see the content

```txt
http://localhost:3000/index.html
```

## Creating Routes for the Server

The final fundamental component of making a basic express server would be creating and managing new routes. Routes are mainly used to forward supported requests to the appropriate pages. In this section we will cover the basics of how to define and use separate route modules.

For your current code sample, you can add lines depending on how many routes you choose to have. You can add routes to your application by again, using the **get()** method. To add new routes, add and alter the line `app.get('/pathName', (req, res) => {res.send('Content');})`. This line makes use of the **get()** method and places in a new path as well as a callback function to display some content.

Let's add an about route to our express application. To do this you can manipulate the given line of code by revising the path and changing what will be showed on that route.

### Your code should now look similar to the following with the new about route implemented

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.get('/about', (req, res) => {res.send('About Us');});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

### The url to see the new route look something like this

```txt
http://localhost:3000/about
```

## Conclusion

You have now created a basic html page and served it on your web server using express as well as acquired basic knowledge regarding controllers and routes.

From here, you can continue to build on the newly learned concepts to match the scale of various web projects.
