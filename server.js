const express = require('express');
const morgan = require('morgan'); // remove in prod
const path = require('path');
const assetsPath = path.join(__dirname, 'assets');

const app = express();
const port = 5500;
app.use('/assets', express.static(assetsPath));
app.use(morgan('dev')); // remove in prod

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});
app.get('/claim', (req, res) => {
  });
  
app.listen(port, () => {
  console.log(`Il server si trova su porta numero ${port}`);
});