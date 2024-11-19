import Groq from "groq-sdk"
import dotenv from 'dotenv'
dotenv.config();

export const getResponseFromOpenAI = async (req, res) => {
    try {
        const { text } = req.body
        if (!text) return res.status(400).send({ status: false, message: "You have to ask something to ask ai" })
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "you are a helpful assistant.",
                },
                {
                    role: "user",
                    content: text,
                },
            ],
            model: "llama3-8b-8192",
            temperature: 0.5,
            max_tokens: 1024,
            top_p: 1,
            stop: null,

            stream: false,
        })
        res.status(200).send({ status: true, message: "Response from ai fetched", response: response.choices[0]?.message?.content })
    } catch (err) {
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}