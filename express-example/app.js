module.exports = function (database) {
    const express = require('express')
    const memes = require('./memes')
    const app = express()

    //all ejs files are hosted in root/views
    app.set('view engine', 'ejs')

    app.get(('/test-endpoint'), (request, response) => {
        response.send("test end point works!")
    })
    
    app.get(('/'), async (request, response) => {
        try {
            let result = await memes.getMemes()
            //console.log(result)
            response.render('memes', {
                title: 'Memes, Memes, Memes!',
                listOfMemes: result 
            }) //got memes

        } catch (error) {
            console.log(error)
        }
        
    })


    // router.get('/user/:id', async (req, res, next) => {
    //     try {
    //       const user = await getUserFromDb({ id: req.params.id })
    //       res.json(user);
    //     } catch (e) {
    //       //this will eventually be handled by your error handling middleware
    //       next(e) 
    //     }
    //   })
    
    return app; //if this wasn't wrapped in a function, this is where we would use module.exports = app
}(null);



