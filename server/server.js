const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: 'sd',
});

const openai = new OpenAIApi(configuration);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/generate', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Вопрос обязателен.' });
  }

  if (!question.toLowerCase().includes('idea')) {
    return res
      .status(400)
      .json({ error: 'Я отвечаю только на вопросы, связанные с идеями.' });
  }

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // Используемая модель
      prompt: `Generate creative ideas for the following topic: "${question}"`,
      max_tokens: 150,
      temperature: 0.7,
    });

    const ideas = response.data.choices[0].text
      .trim()
      .split('\n')
      .filter((idea) => idea);
    res.json({ ideas });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Ошибка генерации идей. Попробуйте позже.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
