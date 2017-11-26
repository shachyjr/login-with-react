const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserController = {};

UserController.add = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (bcryptErr, hash) => {
    if (bcryptErr) throw bcryptErr;
    User.create({ username: req.body.username, password: hash }, (dberr, dbuser) => {
      if (dberr) {
        res.status = 500;
        return res.send(dberr);
      }
      res.status = 200;
      return res.send(dbuser);
    });
  });
};

UserController.verify = (req, res) => {
  User.findOne({ username: req.body.username }, (dberr, dbuser) => {
    if (dberr) {
      res.status = 500;
      return res.send(dberr);
    }
    if (!dbuser) {
      res.status = 401;
      return res.send('Username specified does not exist');
    }
    bcrypt.compare(req.body.password, dbuser.password, (bcryptErr, valid) => {
      if (bcryptErr) throw bcryptErr;
      if (!valid) {
        res.status = 401;
        return res.send('Incorrect password');
      }
      res.status = 200;
      return res.send('Success');
    });
  });
};

module.exports = UserController;
