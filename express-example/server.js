const app = require('./app')



//here we can have supertest have its own app.listen

app.listen(3000, () => {
    console.log("listening on port 3000")
})

