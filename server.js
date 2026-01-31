const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const { getCareerRecommendations } = require("./careerLogic");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { messages, profile, language } = req.body;
    const careers = getCareerRecommendations(profile);

    const systemPrompt = `
You are a career guidance expert for Indian students.
Always reply in ${language}.
Explain careers clearly and simply.

Recommended careers: ${careers.join(", ")}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () =>
  console.log("✅ Backend running at http://localhost:5000")
);
