const express = require('express');

const app = express();


const urls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=nIG3HDaV0hE'
];

app.get('/', function (req, res) {
  const index = Math.floor((Math.random() * urls.length));
  const url = urls[index];
  console.log(index);
  console.log(url);
  res.redirect(302, url);
})

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`)
})
