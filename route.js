import express from 'express'
import { getResponseFromOpenAI } from './openai.js';

const router = express.Router();

router.post('/openai', getResponseFromOpenAI);
router.get('/test', (_, res) => res.send({message : "Open ai api is working!"}));

export default router;