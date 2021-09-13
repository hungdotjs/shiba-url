const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

router.get('/', async (req, res) => {
  try {
    res.json('Hello World!');
  } catch (err) {
    console.error(err);
    res.status(404).json('Server Error!');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.id });

    if (url) {
      return res.redirect(url.longUrl);
    }

    return res.status(404).json('No url found');
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
