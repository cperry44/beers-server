//required files to run 
const express = require('express');
const fs = require('fs');
const router = express.Router();
//==============================================================================
// data that needs to be routed. 

 fs.readFile('beer.json', (err, data) => {
  if (err) throw err;
  beer = JSON.parse(data);
  console.log(beer.beers);
  console.log(`Server setup: ${beer.beers.length} beers loaded`);
 
});



// const beers = [
//   { id: '1', name: 'IPA' },
//   { id: '2', name: 'Stout' },
//   { id: '3', name: 'Brown' },
//   { id: '4', name: 'Pilsner' }
// ];

router.param('beer', function(req, res, next, id) {
  req.beer = beers.find(beer => beer.id === id);

  next();
});
//==============================================================================
//routes

//get all the beers
router.get('/', (req, res) => {
  res.send('hello from beers!');
});

//get a specific beer 
router.get('/:beer', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

//get a specific beer's total reviews
router.get('/:beer/reviews', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

//get a specific beer's specific review
router.get('/:beer/reviews/:review')

//add a beer
router.post('/beers')

//add a review to a specific beer
router.post('/beers/:beer/reviews')

//Edit a beer
router.put('/beers/:beer')

//edit a review
router.put('/beers/:beer/reviews/:review')

//remove a beer
router.delete('/beers/:beer')

//remove a specific beer review
router.delete('/beers/:beer/reviews/:review')




module.exports = router;