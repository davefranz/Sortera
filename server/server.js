// this is our server
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const dbController = require('./controllers/dbController');

app.use(express.json());
app.use(cookieParser());


app.post('/createUser', dbController.createUser, (req, res) => {
  res.sendStatus(200);
});
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// app.get('/build/bundle.js', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
