const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/database');
const product = require('./routes/product');
const { json } = require('express');

dotenv.config({path:path.join(__dirname,"config/config.env")});


app.use('/api/v1',product);

// connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`App listen on ${process.env.PORT}`);
})