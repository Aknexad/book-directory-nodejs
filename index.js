const express = require('express');

const books = require('./data.json');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json(books);
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === id);
  res.json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server run on port ${PORT}`));
