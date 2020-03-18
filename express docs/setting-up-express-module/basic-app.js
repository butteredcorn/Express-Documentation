const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     console.log("Hello World!")
//     res.send("Hello World!")
// })
app.use(express.static('public'))

app.listen(3000, () => {
    console.log(`Express app hosted on port 3000!`)
})