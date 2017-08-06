const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send('Welcome to HelloBooks '.concat(req.body.userName)))
      .catch(error => res.status(400).send(error));
  },
  login(req, res) {
    return Users
      .findOne({
        where: {
          userName: req.body.userName,
          password: req.body.password
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send('Welcome '.concat(req.body.userName));
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  }
};
