const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');
const {
  o, isEmpty, prop, allPass, propEq, either, isNil,
} = require('ramda');
const DB = require('../../db.json');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const isEmptyUsername = o(either(isNil, isEmpty), prop('username'));
const isEmptyPassword = o(either(isNil, isEmpty), prop('password'));
const isEmptyUsernameAndPassword = allPass([isEmptyUsername, isEmptyPassword]);
const isValidUsername = propEq('username', DB.username);
const isValidPassword = propEq('password', DB.password);
const isValidUsernameAndPassword = allPass([isValidUsername, isValidPassword]);

const app = express();
app.use(cors());
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.post('/api/v1/login', async (req, res) => {
  await delay(2000);
  if (isEmptyUsernameAndPassword(req.body)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'username or password can not be empty',
    });
  }
  if (isValidUsernameAndPassword(req.body)) {
    return res.status(200).json({
      statusCode: 200,
      user: {
        id: 1,
        name: 'Steve Rob.',
      },
    });
  }
  return res.status(401).json({ statusCode: 401, message: 'invalid username or password' });
});

app.listen(3000, () => console.log('api start @ port 3000'));
