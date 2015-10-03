var heroCtrl = require('./heroCtrl.js');

module.exports = function(app) {
  // need to add specific method to call for each route
  // app.get('/location', heroCtrl.doThis);

  // req: browser nav. location
  // res: map and location options
  app.get('/location');

  // req: option chosen / location of hero
  // res: 201 or error
  app.post('/location');

  // req: browser nav. location
  // map and location options
  app.get('/task');

  // req: obj with order details from the controller
  // res: 201 or error
  app.post('/task');

  // req: Polling. setInterval poll server to check if order complete
  // res: Polling. return false until order complete
  app.post('/order/details', heroCtrl.checkOrderComplete);

  // req: rating, queueheroId, requesterId
  // res: 201 or error
  app.post('/order/complete');
};