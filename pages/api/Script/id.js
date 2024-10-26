import Script from '../../../models/Script';
import connectMongo from '../../../lib/mongodb';

connectMongo();

export default async (req, res) => {
  const { method } = req;
  if (method === 'POST') {
    const { userId, title, content } = req.body;
    const script = await Script.create({ userId, title, content });
    res.status(201).json(script);
  } else if (method === 'GET') {
    const scripts = await Script.find({ userId: req.query.userId });
    res.status(200).json(scripts);
  }
};
