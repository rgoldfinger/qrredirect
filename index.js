const express = require('express');

const app = express();


const urls = [
  'https://gfycat.com/CoordinatedThreadbareBufflehead',
  'https://i.imgur.com/4gZjIAY.mp4',
  'https://i.imgur.com/jBseLua.mp4',
  'https://i.imgur.com/KbedrL4.gifv',
  'https://i.imgur.com/llqrsqr.mp4',
  'https://i.imgur.com/QGYeA4l.gif',
  'https://i.imgur.com/tUt00Li.gif',
  'https://i.imgur.com/XTJLiuU.gifv',
  'https://i.imgur.com/YCPOl9K.gif',
  'https://twitter.com/EricProton/status/1039251291757719556',
  'https://twitter.com/jaketapper/status/945475213797584896',
  'https://twitter.com/kelllicopter/status/1009227102233808898',
  'https://twitter.com/mattkirshen/status/955151052529020928',
  'https://twitter.com/ShaileeKoranne/status/1025916948540997633',
  'https://vimeo.com/166520806',
  'https://vimeo.com/190226045',
  'https://vimeo.com/191444383',
  'https://vimeo.com/204849820',
  'https://vimeo.com/210145683',
  'https://www.youtube.com/watch?time_continue=180&v=WF34N4gJAKE',
  'https://www.youtube.com/watch?v=-fny99f8amM',
  'https://www.youtube.com/watch?v=2Fw0lEaxiVs&list=PLAVM8BJXhjZYGWrm2PoCEILpYottXJa_S',
  'https://www.youtube.com/watch?v=4B_UYYPb-Gk&feature=player_embedded',
  'https://www.youtube.com/watch?v=BhUGzujGH1k',
  'https://www.youtube.com/watch?v=DyqmRpN-uqM',
  'https://www.youtube.com/watch?v=FUE2qgx-xpM',
  'https://www.youtube.com/watch?v=i1zLoG6YeA4',
  'https://www.youtube.com/watch?v=kO8x8eoU3L4',
  'https://www.youtube.com/watch?v=LaTbI7FCLl0',
  'https://www.youtube.com/watch?v=LKYPYj2XX80',
  'https://www.youtube.com/watch?v=ornXZGEFcds',
  'https://www.youtube.com/watch?v=sfyXa3GBq2Q',
  'https://www.youtube.com/watch?v=TgqiSBxvdws',
  'https://www.youtube.com/watch?v=u52Oz-54VYw',
  'https://www.youtube.com/watch?v=UFFi9PWKDjg',
  'https://www.youtube.com/watch?v=XHc9d2Nihuk&list=PLqR3Fxb-I4r06SIqRy4zERP9YheIAgtTB',
  'https://vimeo.com/264395941',
  'https://youtu.be/IrdYueB9pY4?t=34'
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
