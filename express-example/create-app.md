#Creating a Simple Application

Now that we have an express server skeleton setup, let's create a simple application to demonstrate how the express server will work.

For this example, we will create a javascript file that will simply call an API that will return an JSON object filled with an array of meme objects.

We will use the following API endpoint from api.imgflip.com:

    https://api.imgflip.com/get_memes

#### Step 1 - Setting up Dependencies

For this demo applicatiaon we will be using the request library.

Simply type 'npm install request' in your command line to install the library.

After that, we can import the library into the file with the following line of code:

```javascript
const request = require('request')

```

#### Step 2 - Creating a new getMemes() function

```javascript
function getMemes(){
    return New Promise ((resolve, reject) => {

    })
}
```

Here I have chosen to use Promise syntax, but you can change the function to use callbacks or async await instead.

Now let's define request inside our function and also the url of the API we will be calling like so:

```javascript
function getMemes(){
    return New Promise ((resolve, reject) => {
        const request = require('request')
        const url = 'https://api.imgflip.com/get_memes'
    })
}
```

#### Step 3 - Using the Request Library to request for the JSON data from imgflip

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

If you are following along, you'll see that the a very large block of code gets printed to the console. I have only copied the first big of this block.

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

#### Step 4 - Parsing Out the Data and Sending it to Our Server

Now that we can see what we are getting when we call the request function, let's prepare it for our server.

We know that the object has a property called data that itself is an object with the property memes (which contains our meme objects), so we can simply use dot notation twice to access it like so:

```javascript
    let memes = (JSON.parse(body)).data.memes
```
Note that we need to parse the body out of the JSON object, and we can do that just by using JSON.parse().

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
