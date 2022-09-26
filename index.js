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

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const bookIndex = books.findIndex((b) => b.id === id);
  books.splice(bookIndex, 1, body);
  res.send('book updaated');
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex === -1) res.send('Book dont exist');
  books.splice(bookIndex, 1);
  res.send('book deleted');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server run on port ${PORT}`));
