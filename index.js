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
  if (!book) res.status(404).send('Book dont exsist');
  res.json(book);
});

app.post('/', (req, res) => {
  const body = req.body;
  let id = books.length + 1;
  body.id = id.toString();
  books.push(body);
  console.log(body);
  res.send('Book has been added');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server run on port ${PORT}`));
