const express = require('express');
const app = express();
const server = app.listen(2000, on);

function on() {
  console.log('Mi servidor esta encendido');
}
app.use(express.static('public'));