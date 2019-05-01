import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "30m"
};


var randomTicker = function() {
  var ticker = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < 5; i++) {
    ticker += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return ticker;
};

var ticker = randomTicker();


export default function() {
  let res = http.get(`http://localhost:3001/api/ratings/${ticker}/`);
  let res2 = http.get(`http://localhost:3001/api/history/${ticker}/`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
};