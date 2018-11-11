const express = require('express');

const app = express();


const urls = [
  'https://www.youtube.com/watch?v=LKYPYj2XX80',
  'https://www.youtube.com/watch?v=FUE2qgx-xpM',
  'https://twitter.com/ShaileeKoranne/status/1025916948540997633',
  'https://twitter.com/EricProton/status/1039251291757719556',
  'https://twitter.com/mattkirshen/status/955151052529020928',
  'https://twitter.com/kelllicopter/status/1009227102233808898',
  'https://www.youtube.com/watch?v=XHc9d2Nihuk&list=PLqR3Fxb-I4r06SIqRy4zERP9YheIAgtTB',
  'https://www.youtube.com/watch?v=UFFi9PWKDjg',
  'https://www.youtube.com/watch?v=u52Oz-54VYw',
  'https://www.youtube.com/watch?v=TgqiSBxvdws',
  'https://www.youtube.com/watch?v=sfyXa3GBq2Q',
  'https://www.youtube.com/watch?v=ornXZGEFcds',
  'https://www.youtube.com/watch?v=LaTbI7FCLl0',
  'https://www.youtube.com/watch?v=i1zLoG6YeA4',
  'https://www.youtube.com/watch?v=DyqmRpN-uqM',
  'https://www.youtube.com/watch?v=BhUGzujGH1k',
  'https://www.youtube.com/watch?v=2Fw0lEaxiVs&list=PLAVM8BJXhjZYGWrm2PoCEILpYottXJa_S',
  'https://www.youtube.com/watch?v=-fny99f8amM',
  'https://vimeo.com/291933000',
  'https://vimeo.com/210145683',
  'https://vimeo.com/166520806',
  'https://media.giphy.com/media/phkGe65OAT01W/giphy.gif',
  'https://imgur.com/gallery/WI2t8',
  'https://imgur.com/a/2xuzp',
  'https://i.redd.it/vlugji9cgftz.jpg',
  'https://i.redd.it/qqx6uj30jktz.gif',
  'https://i.redd.it/lnav1c7p68tz.jpg',
  'https://i.redd.it/embo9mt6vktz.jpg',
  'https://i.makeagif.com/media/12-10-2015/wE_fMe.gif',
  'https://i.imgur.com/zaLxL4f.gif',
  'https://i.imgur.com/Z2nm7.gif',
  'https://i.imgur.com/YKavXhS.gif',
  'https://i.imgur.com/YCPOl9K.gif',
  'https://i.imgur.com/XTJLiuU.gifv',
  'https://i.imgur.com/XJIkvSJ.gif',
  'https://i.imgur.com/wWu1JX4.gif',
  'https://i.imgur.com/WvLXjOe.gif',
  'https://i.imgur.com/vRmpYdG.gif',
  'https://i.imgur.com/V7yMNID.gif',
  'https://i.imgur.com/uG4vuBj.gif',
  'https://i.imgur.com/tUt00Li.gif',
  'https://i.imgur.com/t9bpCPV.gif',
  'https://i.imgur.com/sdHPqPt.gif',
  'https://i.imgur.com/rve8IdF.gif',
  'https://i.imgur.com/RohyU6t.gifv',
  'https://i.imgur.com/QvexTp5.mp4',
  'https://i.imgur.com/qrBlHL9.gif',
  'https://i.imgur.com/QGYeA4l.gif',
  'https://i.imgur.com/pox2IFQ.jpg',
  'https://i.imgur.com/OSsa2ko.gifv',
  'https://i.imgur.com/llZh9PJ.gif',
  'https://i.imgur.com/llqrsqr.mp4',
  'https://i.imgur.com/lB1Bjvh.mp4',
  'https://i.imgur.com/KbedrL4.gifv',
  'https://i.imgur.com/jBseLua.mp4',
  'https://i.imgur.com/IRWKTPo.gif',
  'https://i.imgur.com/hTjHSdR.gif',
  'https://i.imgur.com/hdHn7ME.gif',
  'https://i.imgur.com/GYpQrb9.gif',
  'https://i.imgur.com/Gy2ITV6.gif',
  'https://i.imgur.com/gkoDKCP.gif',
  'https://i.imgur.com/gfAm9Ck.gif',
  'https://i.imgur.com/foruZAI.gif',
  'https://i.imgur.com/EPuXoXe.mp4',
  'https://i.imgur.com/dMSnuQl.gif',
  'https://i.imgur.com/DbzRtGQ.gif',
  'https://i.imgur.com/CFvTnF5.gif',
  'https://i.imgur.com/8hZiMcs.gif',
  'https://i.imgur.com/6UP4SKd.gif',
  'https://i.imgur.com/5qw7a9q.mp4',
  'https://i.imgur.com/4gZjIAY.mp4',
  'https://i.imgur.com/3ZnEGUL.gif',
  'https://i.imgur.com/3GStt9l.mp4',
  'https://i.imgur.com/1xuDWW0.gif',
  'https://i.imgur.com/0VDCeIi.gif',
  'https://gfycat.com/CoordinatedThreadbareBufflehead',
  'http://i.imgur.com/yH7H3.gif',
  'http://i.imgur.com/uo7kX9q.jpg',
  'https://www.youtube.com/watch?time_continue=180&v=WF34N4gJAKE',
  'https://www.youtube.com/watch?time_continue=76&v=xOYc1iXC1ww'
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
