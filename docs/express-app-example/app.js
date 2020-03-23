module.exports = function (database) {
    const express = require('express')
    const memes = require('./memes')
    const app = express()
    const aboutRouter = require('./routes/about')


    app.use(express.static('public')) 
    app.use(aboutRouter)

    //all ejs files are hosted in root/views
    app.set('view engine', 'ejs')

    app.get(('/test-endpoint'), (req, res) => {
        res.send("test end point works!")
    })
    
    app.get(('/'), async (req, res) => {
        try {
            let result = await memes.getMemes()
            //console.log(result)

            //ejs syntax to render values/variables
            res.render('memes', {
                title: 'Memes, Memes, Memes!',
                listOfMemes: result 
            }) //got memes()

        } catch (error) {
            console.log(error)
        }
        
    })

    app.get(('/memes'), async (req, res) => {
        try {
            let result = await memes.getMemes()
            console.log(result)
            //ejs syntax to render values/variables
            res.render('memes', {
                title: 'Memes, Memes, Memes!',
                listOfMemes: result 
            }) //got memes()
        } catch (error) {
            console.log(error)
        }
        
    })

    return app; //if this wasn't wrapped in a function, this is where we would use module.exports = app
}(null);



