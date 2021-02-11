module.exports = (app) => {
  const user = require('./controllers/user.controller.js');
  // Create a new user
  app.post('/users', user.create);

  // get user
  app.get('/users', user.findAll);

  // get user by id
  app.get('/users/:userId', user.findOne);

  // Update a user with userId
  app.put('/users/:userId', user.update);

  // Delete a user with userId
  app.delete('/users/:userId', user.delete);

  const product = require('./controllers/product.controller.js');

  // create product
  app.post('/products', product.create);

  // get product
  app.get('/products', product.findAll);

  // get product by id
  app.get('/products/:productId', product.findOne);

  const order = require('./controllers/order.controller.js');

  // create order
  app.post('/orders', order.create);

  // get order
  app.get('/orders', order.findAll);

  // get order by id
  app.get('/orders/:orderId', order.findOne);

}