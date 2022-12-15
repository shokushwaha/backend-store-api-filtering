require('dotenv').config()
require('express-async-errors')
const port=process.env.PORT;
const express = require('express')
const app = express()

// database connection
const connectDB=require('./db/connect')

// middleware
app.use(express.json())

// router
const productRouter=require('./router/routes')


// routes
app.get('/', (req, res) => {
    res.send("working");
}
)

app.use('/api/v1/products',productRouter);

// server start
const start = async () => {

    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is running....${port}`)
        })
    } catch (error) {
        console.log(error);
    }

   
}

start();