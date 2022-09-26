const express = require('express');

const booksRout = require('./routes/books');

const app = express();

app.use(express.json());

app.use('/api/books', booksRout);

app.get('/', (req, res) => {
  res.send('Home Page');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server run on port ${PORT}`));
