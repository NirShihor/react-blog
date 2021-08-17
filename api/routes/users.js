const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');

// UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('User has been updated');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You may update only your account!');
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const posts = await Post.find({ username: user.username });
      if (posts) {
        await Post.deleteMany({ username: user.username });
      }
    } catch (err) {}
    try {
      const user = await User.findById(req.params.id);
    } catch (err) {}
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted');
    } catch (err) {
      res.status(404).json('User not found');
    }
  } else {
    res.status(401).json('You may delete only your account!');
  }
});

// GET USER
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
