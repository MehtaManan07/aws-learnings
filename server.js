const express = require('express')
require('dotenv').config()

const app = express();

app.get('/', (req,res) => {
    res.send(`Hey there, welcome to my first deploy on aws, ${process.env.la}`)
})

app.listen(1000, () => {
    console.log('Hey there, it is up!')
})