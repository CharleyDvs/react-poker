const express = require('express');
const cors = require('cors');
const { Deck, Hand } = require('../app/cards/deck');

const app = express();

const PORT = 4040;

app.use(cors());
app.use(express.json());

const deck = new Deck();

app.use(express.static('public'));

app.get('/get-table-hand', (req, res) => {
  res.json({
    hand: {
      cards: deck.tableHand,
    },
  });
});

app.get('/get-hand/:size', (req, res) => {
  const { size } = req.params;
  const playerHand = new Hand(deck, parseInt(size));
  res.json({
    hand: playerHand,
  });
});

app.post('/player', (req, res) => {
  const {
    body: { user },
  } = req;
  res.json({
    user,
  });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
