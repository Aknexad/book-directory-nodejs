const express = require('express');

const books = require('../data.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(books);
});

router.get('/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).send('The Book With this ID Not Find');
  res.json(book);
});

router.post('/', (req, res) => {
  if (req.body.title === '' || req.body.aurth === '') {
    res.status(400).res.send('invaled data');
    return;
  }

  const book = {
    id: (books.length + 1).toString(),
    title: req.body.title,
    aurth: req.body.aurth,
  };

  books.push(book);
  res.json(book);
  res.send('Book has been added');
});

router.put('/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).send('The Book With this ID Not Find');

  if (req.body.title === '' || req.body.aurth === '') {
    res.status(400).res.send('invaled data');
    return;
  }

  book.title = req.body.title;
  book.aurth = req.body.aurth;

  res.json(book).send('book updated');
});

router.delete('/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).send('The Book With this ID Not Find');

  const index = books.indexOf(book);
  books.splice(index, 1);
  res.send('Book deleted');
});

module.exports = router;
