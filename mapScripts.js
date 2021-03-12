
var map = L.map('Map', {
  center: [51.0447, -114.0719],
  zoom:11
});

var token = 'pk.eyJ1Ijoic2FpZGhlZXJhaiIsImEiOiJja201eWtrNGswZ2VqMnJvY2piY3h5ZmIwIn0.Ik4F9-k3CJUhDgbYRyiJGQ';
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/saidheeraj/ckm5zlxzj0t4517p3w3njyuef/tiles/{z}/{x}/{y}?access_token=' + token, {
  tileSize:512,
  zoomOffset:-1,
  attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var openstreet=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  tileSize:512,
  zoomOffset:-1,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

mapbox.addTo(map);

L.control.layers({
  "Mapbox":mapbox,
  "OpenStreetMap":openstreet,
}, null, {
  collapsed: false
}).addTo(map);
