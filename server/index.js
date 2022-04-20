import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import postRoutes from './router/posts.js';


dotenv.config();

const port = process.env.PORT || 5000
const url = process.env.MONGODB_URI

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes);

mongoose.connect(url).then(() => console.log("Connection to MongoDB is successful"))
    .then(() => app.listen(port, () => console.log(`Server running on Port: ${port}`))
    ).catch((err) => console.log("Error: " + err.message));

