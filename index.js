import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors';
import router from './route.js';

const app = express();
const corsOptions = {
    origin: ['https://ask-ai-two.vercel.app/', 'http://localhost:3000/'], // Add all allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));

// Optional: Handle preflight requests (OPTIONS method)
app.options('*', cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

const PORT = process.env.PORT || 8800;
app.listen(PORT, (_, err) => {
    if (err) console.log(err)
    else console.log("server running on", PORT)
})