module.exports = function (database) {
    const express = require('express')
    const memes = require('./memes')
    const app = express()
    const aboutRouter = require('./routes/about')
    const Sentry = require('@sentry/node');
    Sentry.init({
        dsn: 'https://04c45c80d96840b58988cb9771acd41d@sentry.io/2300829',
    });

    app.use(Sentry.Handlers.requestHandler());


    app.get('/test-sentry', function (req, res) {   
        // Sentry.configureScope(function(scope) {
        // 	scope.setUser({ email: email });
        // 	scope.setTag('test_error_tag', 'hello world!');
        // 	scope.setLevel('warning');
        // });
        res.send("ERROR!")
        throw new Error('My first Sentry error!');
    });

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

    app.use(Sentry.Handlers.errorHandler());

    return app; //if this wasn't wrapped in a function, this is where we would use module.exports = app
}(null);



