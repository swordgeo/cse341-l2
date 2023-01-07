const express = require('express');
const app = express();
const mongodb = require('./db/connect');




const port = process.env.PORT || 3000;

app.use('/', require('./routes'))// http://localhost:3000

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

