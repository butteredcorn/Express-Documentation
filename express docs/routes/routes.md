# Using routers for modularity and passport for protection

## Creating a routes folder

Within your project's top level directory, create a new folder called **routes**. This folder will hold the various files intended to handle all the different routes and endpoints that are needed for your application. Having this folder, and making use of the files inside of it, plays a significant role in keeping your project's endpoints organized.

This example application will have a routes folder with two files: **index.js** and **about.js**. The index file will handle the route to the home page, while the about file will handle the route to the about page.

### Inside the routes folder

![routes_folder](images/routes_folder.png?raw=true "Routes folder")

## Code for the routes files

In this example we will use the source code from the previous module and modularize the application so that the routes are all separated into multiple files within the routes folder.

### The source code from the previous module

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.get('/about', (req, res) => {res.send('About Us');});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

## Modularizing the homepage route

First, we will work on the index route, or homepage. Like any express app, the first line of code would be to require express. You can do this by writing the line `const express = require('express')`. Here is when we being to take advantage of using routes. In the following line we will set a variable equal to the `express.Router()` function. Doing this will grant you all the functionalities of the router function tied to one variable. By convention, we will call this variable **router**. The final line for this introductory code block will be to require path. This line gives pathing functionalities throughout all directories. Doing this provides the user with an easier time referencing files, which we will be a lot since this module focuses on having various separate files.

### Your index.js file inside of your routes folder should look something like this

```javascript
const express = require('express')
const router = express.Router();
const path = require('path');
```

The following code that we will write will make use of our router variable that we have previously defined. Similar to the **app** variable covered in the previous module, we will again apply the get method; in this case we will use **router.get()** instead of **app.get()**. Although named a different variable, the overarching goal remains the same and will be written in a similar manner.

The code ```router.get()``` takes in a path and a callback function. The path will be set to **/** for this function, as it will hold the home page of our application. Next, the function will take in a callback function. The callback function will provide the requested path, so that the router function can bind the **/** route to the pre-baked html page that was created in the previous module.

The callback function uses ```res.sendFile(path.resolve('public/index.html')```. The method **res.sendFile()** sends the direct path to a file. Typically there would be an issue with sending files in different directories to our ```res.sendFile()```. This is where our path variable comes into play. We can use the method **path.resolve()** to allow the direct path to the file to pass our **res.sendFile()**. For this scenario we will pass in the path to our pre-baked html page: **public/index.html**.

### Your code should look something like this

```javascript
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
  });
```

To finish off this file, we need to make this file available to be reached by other files. The code ```module.exports = router;``` will accomplish the task at hand.

### The final outcome for this file should look something like this

```javascript
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
  });

module.exports = router;
```

The next step would be to require this freshly developed file inside of our **server.js** file. To do this, we must alter the line where we work with the homepage inside of our **server.js** file.

The first phase of altering our **server.js** file would be to replace the lines ```app.get('/', (req, res) => res.send('Hello World!'))``` and ```app.use(express.static('public'))```. We will be replacing these lines with other lines to refer to our **index.js** file. Firstly, we need to require our **index.js** file inside of our **server.js** file. The line ```const indexRouter = require('./routes/index');``` accomplishes the job. The variable can be named to whatever your hearts desire. For this example we will call it indexRouter.

### Your server.js file should look similar to this

```javascript
const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/index');

app.get('/about', (req, res) => {res.send('About Us');});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

This current code only has the function to be able to use the **index.js** file. Next we need to apply the work we did inside of **index.js** to our server file. To do this we simply need to use the method **app.get()** and pass in our variable, indexRouter, where we required our index file.

### Your server.js file with functional route to the home page should look similar to this

```javascript
const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/index');

app.use(indexRouter)

app.get('/about', (req, res) => {res.send('About Us');});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

## Modularizing the about route

Modularizing the about route will be similar to modularizing the index page. The first step would be create a new file inside of the routes folder. Inside of the routes folder, create a new file called **about.js**. This file can be named anything of your choice. In this case we will call it *about* since it handles the about route.

Like the **index.js** file, our first two lines of our about file should be ```const express = require('express');``` and ```const router = express.Router();```. Next we will build the router function within the **about.js** file. It will look relatively similar to the function that has been previously built. The code to create the about route should look like ```router.get('/about', function(req, res, next) {
res.send('about us');
  });```. Different from the index router, we will set this path to be **/about**. Lastly we need to export this file so it can be used within the server file.

### The about file should look similar to this

```javascript
const express = require('express');
const router = express.Router();

router.get('/about', function(req, res, next) {
    res.send('about us');
  });

module.exports = router;
```

The next step would be to jump back to the **server.js** file and manipulate the code that works with the about route. Back inside **server.js**  we need to require our new about file. We can do this by using the line ```const aboutRouter = require('./routes/about');```. Like our index router, we will make use of the method **app.get()** and pass in the variable where we required the about file.

### The server.js file should make use of all the newly created routes and look similar to this

```javascript
const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

app.use(indexRouter)

app.use(aboutRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

### The urls to see the new index and about route should look something like this respectively

```txt
http://localhost:3000

http://localhost:3000/about
```
