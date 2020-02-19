const db = require('../db/postgresDB');

const dbController = {};

dbController.createUser = (req, res, next) => {
  const { username, password, email, downloads } = req.body;
  const values = [username, password, email, downloads];
  console.log('req.body: ', req.body);
  const text = `
      INSERT INTO users (username, password, email, downloads)
      values($1, $2, $3, $4)
    `;

  db.query(text, values)
    .then((response) => {
      console.log(response);
      next();
    })
    .catch((err) => console.log(err));
};

module.exports = dbController;
