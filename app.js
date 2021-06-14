const express = require('express');
const indexRouter = require('./routes/index')

//added express variable
const app = express();

//Custom port for real or local server
const port = 3000 || process.env.PORT

app.use('/', indexRouter)


//starting server on the required port
app.listen(port, () => {
    console.log('Server is up on ' + port)
})