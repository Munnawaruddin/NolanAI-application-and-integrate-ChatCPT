import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export default async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 100,
    });
    res.status(200).json({ response: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Error with OpenAI API' });
  }
};
