const usersController = require('../controllers').users;
const booksController = require('../controllers').books;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users/signup', usersController.create);
  app.post('/api/users/signin', usersController.login);
  app.post('/api/users/books', booksController.create);
  app.get('/api/users/books', booksController.list);
  app.put('/api/books/:booksId', booksController.update);
  app.post('/api/users/:usersId/books', booksController.borrow);
};
