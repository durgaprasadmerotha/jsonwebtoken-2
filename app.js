const express = require('express')
const  app = express()
const connectTodb = require("./config/mongodb")
connectTodb();


app.get('/', (req, res) => {
   res.send('hellooo')
})



app.listen(3000, () => {
    console.log(`server is running localhost:3000`);
    
})

