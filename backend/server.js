const dotenv = require("dotenv").config()
const port = process.env.PORT;
const express = require('express')
const app = express();
const route = require("./routes/router")
const cors = require('cors'); // Import CORS
const path = require('path')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// middleware
app.use(cors()); // Enable CORS to excahnge data
app.use(express.json()) // read the request body to be used in our app


app.use((req,res,next)=> {
    console.log(req.path, req.method)
    next() //used to call the next function, after middleware
})
app.use("/", route)


app.listen(port, ()=>{
    console.log(`Using port: ${port}`)
    console.log(__dirname)
})
