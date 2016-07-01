'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(bodyParser.json()); // for Content-Type 'application/json'
app.use(bodyParser.text()); // for Content-Type 'text/plain'
// for Content-Type 'application/x-www-form-urlencoded'
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(cors());

const users = [
  {
    username: 'axel.rivera',
    email: 'axel.rivera@company.com',
    password: 'ps1'
  },
  {
    username: 'adam.smith',
    email: 'adam.smith@company.com',
    password: 'ps1'
  },
  {
    username: 'john.smith',
    email: 'john.smith@email.com',
    password: 'ps1'
  }
];

app.post('/rest/users/password-reset', (req, res) => {
  const item = req.body;
  const found = users.some(user => user.username === item.username && user.email === item.email);

  if (found) {
    res.status(204).send();
  } else {
    res.status(401).send('unauthorized');
  }
});

app.listen(8083, () => console.log('ready'));