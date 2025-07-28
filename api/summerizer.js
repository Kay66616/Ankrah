const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

// Set up OpenAI
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

router.post('/', async (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: 'Text is required.' });

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that summarizes meetings clearly.',
        },
        {
          role: 'user',
          content: `Summarize the following meeting notes:\n\n${text}`,
        },
      ],
    });

    const summary = completion.data.choices[0].message.content.trim();
    res.json({ summary });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ error: 'Failed to summarize.' });
  }
});

module.exports = router;
