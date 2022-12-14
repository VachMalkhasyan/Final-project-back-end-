const express = require('express');
const app = express()
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())


//ROUTES

//register and login routes

app.use('/auth',require('./routes/jwtAuth'));


app.listen(5000,() => {
    console.log('server has started on port 5000')
});