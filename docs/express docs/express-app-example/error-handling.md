#### Step 9: Error Handling - The Optional but Not Really Part

So our memes endpoint/webpage works, but no code is complete without error handling. We can add some error handling by simply wrapping our function call to memes.getMemes() in a try-catch block like so:

```javascript
    app.get(('/memes'), async (request, response) => {
        try {
            let result = await memes.getMemes()

            response.render('memes', {
                title: 'Memes, Memes, Memes!',
                listOfMemes: result 
            })

        } catch (error) {
            //handle error here
            console.log(error)
        }
        
    })
```
and finally, our app.js file should look like this:

```javascript
module.exports = function (database) {
    const express = require('express')
    const memes = require('./memes')
    const app = express()

    app.set('view engine', 'ejs')

    app.get(('/memes'), async (request, response) => {
        try {
            let result = await memes.getMemes()

            response.render('memes', {
                title: 'Memes, Memes, Memes!',
                listOfMemes: result 
            })

        } catch (error) {
            console.log(error)
        }
        
    })
    
    return app;
}(null);
```