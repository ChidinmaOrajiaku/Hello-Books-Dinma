const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  login(req, res) {
    return Users
      .findOne({
        where: {
          userName: req.body.userName
        }
      })
      .then(user => res.status(200).send(user))
      .catch((error) => {
        console.log(error);
        res.status(404).send(error);
      });
  }
};
