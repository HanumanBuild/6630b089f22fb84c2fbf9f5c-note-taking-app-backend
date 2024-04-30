const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Create a new note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).send(newNote);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).send(notes);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;