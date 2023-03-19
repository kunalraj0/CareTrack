const express = require('express');
const router = express.Router();
const Task = require('../../models/task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render('tasks/index', { tasks });
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'Error getting tasks', error: err });
  }
});

module.exports = router;
