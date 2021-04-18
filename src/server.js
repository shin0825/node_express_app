'use strict';

const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 8888;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);