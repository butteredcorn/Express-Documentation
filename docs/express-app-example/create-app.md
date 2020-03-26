---
layout: default
nav_order: 4
---

# Creating a Simple Application

Now that we have an express server skeleton setup, let's create a simple application to demonstrate how the express server will work. For this example, we will create a javascript file that will simply call an API that will return an JSON object filled with an array of meme objects. We will use the following API endpoint from api.imgflip.com:

    https://api.imgflip.com/get_memes

Due to the nature of this particular task, we will be discussing more concepts than in our other tutorials. we break down this tutorial into the following seven sections:
<ol>
<li>Setting up Dependencies</li>
<li>Creating a new getMemes() function</li>
<li>Using the Request Library to request for the JSON data from imgflip</li>
<li>Parsing Out the Data and Preparing it to be Sent Out</li>
<li>Organizing the Data</li>
<li>Importing Your Application and Wrapping It in the Express App </li>
<li>Error Handling - The Optional but Not Really Part</li>
</ol>

## Section 1 - Setting up Dependencies

For this demo applicatiaon we will be using the request library.

Simply install request through your terminal with the following command:

```bash
npm install request
```

After that, we can import the library into a new file called memes.js like so:

```javascript
memes.js
--------

const request = require('request')
```

## Section 2 - Creating a new getMemes() function

After we have request setup, let's create a function to handle the API call like so:

```javascript
function getMemes(){
    return New Promise ((resolve, reject) => {

    })
}
```

>Note: We have chosen to use Promise syntax, but you can change the function to use callbacks or async await instead.

Now let's define request inside our function and also the url of the API we will be calling like so:

```javascript
function getMemes(){
    return New Promise ((resolve, reject) => {
        const request = require('request')
        const url = 'https://api.imgflip.com/get_memes'
    })
}
```

## Section 3 - Using the Request Library to request for the JSON data from imgflip

The request library has the following function for requesting the JSON data from an API:

```javascript
    //Note that this section of code will be inside of our getMemes() function
    request(url, (error, response, body) => {
        //if there is no error and the response from the API's server is status code 200
        if (!error && response.statusCode == 200) {
            //do something with the 'body' such as:
            console.log(body)
        }
    }

```

The request function has 2 parameters, a string for the url of the API, and a function that takes an error, the response object, and something the request library refers to as 'body'.

Let's see what is inside this mysterious 'body' parameter by logging it to the console...

```javascript
{"success":true,"data":{"memes":[{"id":"181913649","name":"Drake Hotline Bling","url":"https:\/\/i.imgflip.com\/30b1gx.jpg","width":1200,"height":1200,"box_count":2}, ...
```

If you are following along, you'll see that the a very large block of code gets printed to the console. I have only copied the first little bit of this block.

Why don't we refactor it a bit so that it is easier to read like so:

```javascript
{
"success":true,
"data":{
    "memes":
        [
            {"id":"181913649",
            "name":"Drake Hotline Bling",
            "url":"https:\/\/i.imgflip.com\/30b1gx.jpg","width":1200,
            "height":1200,
            "box_count":2},
            
            ...,

            ...,

        ]
    }
}
```

Essentially this API is returning an object with several properties, notably a data property that is housing our meme objects that are stored in an array. The reason why the 'body' is so long, because it stores so many meme objects.

## Section 4 - Parsing Out the Data and Preparing it to be Sent Out

Now that we can see what we are getting when we call the request function, let's prepare it for our server.

#### 1. Parsing the Data

We know that the object has a property called data that itself is an object with the property memes (which contains our meme objects), so we can simply use dot notation twice to access it like so:

```javascript
    let memes = (JSON.parse(body)).data.memes
```
Note that we need to parse the body out of the JSON object, and we can do that just by using ```JSON.parse()```.

#### 2. Structure the Data in an Array

Once we have our memes, we can simply loop through them and push them into a container like an array, like so:

```javascript
    let memes = (JSON.parse(body)).data.memes
    let cache = []

    memes.forEach((meme) => {
        cache.push(meme)
    })
```

Now let's log our new filled up array to the console and see what we have now.

```javascript
[ 
    { id: '181913649',
    name: 'Drake Hotline Bling',
    url: 'https://i.imgflip.com/30b1gx.jpg',
    width: 1200,
    height: 1200,
    box_count: 2 },

  { id: '112126428',
    name: 'Distracted Boyfriend',
    url: 'https://i.imgflip.com/1ur9b0.jpg',
    width: 1200,
    height: 800,
    box_count: 3 },

  { id: '87743020',
    name: 'Two Buttons',
    url: 'https://i.imgflip.com/1g8my4.jpg',
    width: 600,
    height: 908,
    box_count: 2 },

    ...,

    ...
}
```
Wow! There sure are a lot of them. For now let's just limit the memes to ten.

#### 3. Limit the Memes to Ten

 By using an if statement we can reduce the objects to a workable amount like so:

```javascript
    let memes = (JSON.parse(body)).data.memes
    let counter = 0;
    let cache = [];

    memes.forEach((meme) => {
        if (counter < 10) {
            cache.push(meme)
            counter++;
        }
    })

    if (counter >= 10) {
        //handle the result after code is completed
        console.log("Done.")
        resolve(cache)
    }

```

#### 4. Putting it Together

And finally, putting it all together, our function should look like this:

```javascript
function getMemes(){
    return new Promise ((resolve, reject) => {
        const request = require('request')
        const url = 'https://api.imgflip.com/get_memes'
            request(url, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let memes = (JSON.parse(body)).data.memes
                    let counter = 0;
                    let cache = [];
        
                    memes.forEach((meme) => {
                        if (counter < 10) {
                            cache.push(meme)
                            counter++;
                        }
                    })
                    console.log(cache)
                    if (counter >= 10) {
                        //handle the result after code is completed
                        console.log("Done.")
                        resolve(cache)
                    }
                }
            }) 
        
        })
}

module.exports = {
    getMemes
}
```

## Section 5: Organizing the Data

Now that we have limited the meme objects to just 10, log out the the code to see what you get. If you are paying close attention, you will notice that it is the exact same memes in the exact same order!

Now, this would be fine if there ten memes were the only ones that we wanted to show our end users, but that seems a little bit boring...

#### 1. Introducing a Shuffle Algorithm

We can keep our users interested in our application by add a shuffling function to the code. We can use the following shuffle algorithm to accomplish this:

```javascript
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
```

#### 2. 'Organize' the Data by Shuffling It

Ensure that you put this before we push the meme objects into the cache array like so:

```javascript
    let memes = (JSON.parse(body)).data.memes

    //shuffle the memes
    memes = shuffleArray(memes); 
    
    let counter = 0;
    let cache = [];

    memes.forEach((meme) => {
        ...
```

#### 3. Putting It Together

And at last, our file should look something like this:

```javascript
function getMemes(){
    return new Promise ((resolve, reject) => {
        const request = require('request')
        const url = 'https://api.imgflip.com/get_memes'
            request(url, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let memes = (JSON.parse(body)).data.memes
                    memes = shuffleArray(memes); 

                    let counter = 0;
                    let cache = [];
        
                    memes.forEach((meme) => {
                        if (counter < 10) {
                            cache.push(meme)
                            counter++;
                        }
                    })
                    console.log(cache)
                    if (counter >= 10) {
                        //handle the result after code is completed
                        console.log("Done.")
                        resolve(cache)
                    }
                }
            }) 
        
        })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

module.exports = {
    getMemes
}
```

>Note: For even more modularity, the shuffleArray function should really be put into another file.

Now that we have completed our application, let's wrap it up! (no pun intended).

## Section 6: Importing Your Application and Wrapping It in the Express App 

In your app.js file or whatever you named your file that handles wrapping your applications, it is time to setup our first real end point.

#### 1. Requiring Our Memes.js

So far our app.js file should look something like this:

```javascript
    module.exports = function (database) {
        const express = require('express')
        const app = express()
        
        //app.get('/', (req, res) => res.send('Hello World!'))
        app.use(express.static('public'))
        
        return app;
    }(null);
```

First, let's start off by requiring our newly created memes file with:

```javascript
    const memes = require('./memes')
```

#### 2. Create Another End Point

Now, let's make an endpoint called /memes. Like before, we will need to use the express app.get() function, and then pass in our endpoint name. We can simply call our function in memes.js and assign it to a variable and just log it out to the console for now like so:

```javascript
    app.get(('/memes'), (req, res) => {
        let result = memes.getMemes()
        console.log(result)
    })
```

Interestingly, however, this will log out:

```javascript
    Promise { <pending> }
```

And that's not the thing that we want, so we will need to modify the code the somehow.

#### 3. Handle Asynchronous Function

The issue is that the code is asynchronous. We must add some sort of mechanism to handle this fact.

We will use async await syntax to achieve this, but again you could use callbacks or promises if you prefer.

Refactoring the code, we get this:

```javascript
    app.get(('/memes'), async (request, response) => {
        let result = await memes.getMemes()
        console.log(result)
        
    })
```

Now, let's see what we get...

```javascript
[ { id: '28034788',
    name: 'Marvel Civil War 1',
    url: 'https://i.imgflip.com/govs4.jpg',
    width: 423,
    height: 734,
    box_count: 2 },
  { id: '27813981',
    name: 'Hide the Pain Harold',
    url: 'https://i.imgflip.com/gk5el.jpg',
    width: 480,
    height: 601,
    box_count: 2 },
  { id: '89655',
    name: 'Uncle Sam',
    url: 'https://i.imgflip.com/1x6f.jpg',
    width: 620,
    height: 833,
    box_count: 2 },

    ...,
    
]
```

Much better, however, we are still missing one last thing...

## Section 7: Error Handling - The Optional but Not Really Part

So our memes endpoint works, but no code is complete without error handling. We can add some error handling by simply wrapping our function call to ```memes.getMemes()``` in a try-catch block like so:

```javascript
app.get(('/memes'), async (request, response) => {
    try {
        let result = await memes.getMemes()
        console.log(result)

    } catch (error) {
        //handle error here
        console.log(error)
    }
    
})
```
And finally, our app.js file should look like this:

```javascript
app.js
------

module.exports = function (database) {
    const express = require('express')
    const memes = require('./memes')
    const app = express()

    //app.get('/', (req, res) => res.send('Hello World!'))
    app.use(express.static('public'))

    app.get(('/memes'), async (request, response) => {
        try {
            let result = await memes.getMemes()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    })
    
    return app;
}(null);
```

## Summary

At this point, we have created a basic express server, created an application that is asynchronous, and handled that asynchronicity within our app.get() function inside our express app. So far, however, the only thing that is happening when someone accesses our app.get('/memes') is that we get some meme objects logged out to our console. Let's [render this data to the front-end](./ejs.md), so we can finally see the fruits of our labours!