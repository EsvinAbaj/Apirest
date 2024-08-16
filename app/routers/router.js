
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');
const spotifys = require('../controllers/controller.spotify.js');
const libross = require('../controllers/controller.libros.js');

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

router.post('/api/spotifys/create', spotifys.create);
router.get('/api/spotifys/all', spotifys.retrieveAllSpotifys);
router.delete('/api/spotifys/delete/:id', spotifys.deleteById);

router.post('/api/libros/create', libross.create);
module.exports = router;