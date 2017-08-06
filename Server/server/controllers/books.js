const Books = require('../models').Books;
const Users = require('../models').Users;


module.exports = {
  create(req, res) {
    return Books
      .create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        // userId: req.params.usersId,
      })
      .then(books => res.status(201).send(books))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Books
      .findAll({})
      .then((books) => {
        if (books.length === 0) {
          res.status(200).send('No books in the library');
        }
        res.status(200).send(books);
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error);
      });
  },
  update(req, res) {
    return Books
      .findById(req.params.booksId)
      .then((books) => {
        if (!books) {
          return res.status(404).send({
            message: 'Book Not Found',
          });
        }
        books.update({
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
        })
          .then(() => res.status(200).send(books)) // Send back the updated books.
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error);
      });
  },
  borrow(req, res) {
    return Users
      .findById(req.params.usersId)
      .then((users) => {
        if (users) {
          return Books
            .findOne({
              where: {
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
              }
            })
            .then((books) => {
              if (!books) {
                return res.status(404).send({
                  message: 'Books Not Found',
                });
              }
              return res.status(200).send('Enjoy your book');
            });
        }
        return res.status(200).send('User not found');
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  }
};
