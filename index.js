import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors';
import router from './route.js';

const app = express();
app.use(cors({
    origin: process.env.ASK_AI_BASE_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

const PORT = process.env.PORT || 8800;
app.listen(PORT, (_, err) => {
    if (err) console.log(err)
    else console.log("server running on", PORT)
})