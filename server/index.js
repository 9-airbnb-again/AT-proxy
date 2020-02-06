const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/:id', (req, res) => {
  axios.get('http://localhost:1337' + req.url)
    .then((r) => {
      res.send(JSON.stringify(r.data));
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.get('/v1/api/:accommodationId/reviews', (req, res) => {
  axios.get('http://localhost:2020' + req.url)
    .then((r) => {
      return res.send(JSON.stringify(r.data));
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.get('/api/v1/listings', (req, res) => {
  axios.get('http://localhost:3000' + req.url)
    .then((r) => {
      res.send(JSON.stringify(r.data));
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.get('/getHomes', (req, res) => {
  axios.get('http://localhost:4321' + req.url)
    .then((r) => {
      res.send(JSON.stringify(r.data));
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.get('/api/related-homes/:listingId', (req, res) => {
  axios.get('http://localhost:4321' + req.url)
    .then((r) => {
      res.send(JSON.stringify(r.data));
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

app.listen(8888, () => console.log('api server is running on port 8888'))