



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

