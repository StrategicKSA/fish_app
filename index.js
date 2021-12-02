//importing the package express
import express from 'express';
//importing the mongoose package
import mongoose from 'mongoose';

//importing the dotenv package
import dotenv from 'dotenv';
dotenv.config();
//creating an instance of the package express
const app = express();

//creating a port for the server
const PORT = process.env.PORT ?? 5000;
//creating a routesss
app.get('/', (req, res) => {
    res.send("Easy On Me")
});


mongoose.connect(process.env.MONGO_DB_CONSTRING, (error) => {
    //creating a server for the port

    if (error) {
        return console.log("connection unable to connect to MongoDB");
    }
    else {
        console.log("connection to MongoDB successful");

        app.listen(PORT, () =>
            console.log(`server up and listening to request on ${PORT}`));
    }
});
