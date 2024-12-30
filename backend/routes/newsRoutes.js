const express = require('express');
const router = express.Router();
const News = require('../models/newsModel');

// Route to get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

// Route to create or update news
router.post('/', async (req, res) => {
  const { title, date, content } = req.body;
  try {
    const newNews = new News({ title, date, content });
    await newNews.save();
    res.status(201).json({ message: 'News added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add news' });
  }
});

// Route to delete news
router.delete('/:id', async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete news' });
  }
});

module.exports = router;
