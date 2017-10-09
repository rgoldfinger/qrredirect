const express = require('express');

const app = express();


const urls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=nIG3HDaV0hE'
];

app.get('/', function (req, res) {
  const index = Math.floor((Math.random() * urls.length));
  const url = urls[index];
  res.redirect(301, url);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
