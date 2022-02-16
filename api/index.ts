import type { VercelRequest, VercelResponse } from "@vercel/node";

const urls = [
  "https://i.imgur.com/4gZjIAY.mp4",
  "https://i.imgur.com/jBseLua.mp4",
  "https://i.imgur.com/KbedrL4.gifv",
  "https://i.imgur.com/llqrsqr.mp4",
  "https://i.imgur.com/QGYeA4l.gif",
  "https://i.imgur.com/tUt00Li.gif",
  "https://i.imgur.com/XTJLiuU.gifv",
  "https://i.imgur.com/YCPOl9K.gif",
  "https://twitter.com/EricProton/status/1039251291757719556",
  "https://twitter.com/jaketapper/status/945475213797584896",
  "https://twitter.com/kelllicopter/status/1009227102233808898",
  "https://twitter.com/mattkirshen/status/955151052529020928",
  "https://vimeo.com/190226045",
  "https://vimeo.com/191444383",
  "https://vimeo.com/204849820",
  "https://www.youtube.com/watch?time_continue=180&v=WF34N4gJAKE",
  "https://www.youtube.com/watch?v=2Fw0lEaxiVs",
  "https://www.youtube.com/watch?v=FUE2qgx-xpM",
  "https://www.youtube.com/watch?v=LKYPYj2XX80",
  "https://www.youtube.com/watch?v=TgqiSBxvdws",
  "https://www.youtube.com/watch?v=UFFi9PWKDjg",
  "https://vimeo.com/264395941",
  "https://youtu.be/IrdYueB9pY4?t=34",
];

export default function (req: VercelRequest, res: VercelResponse) {
  const index = Math.floor(Math.random() * urls.length);
  const url = urls[index];
  console.log(index);
  console.log(url);
  res.redirect(302, url);
}
