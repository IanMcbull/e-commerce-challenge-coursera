mapboxgl.accessToken = 'pk.eyJ1IjoiaWFubXVnZW55YSIsImEiOiJja3Y5Z2I2N24yOXB2MnVzM2V0YXpxbnpoIn0.JWu-qiW-iQEjgARRo9qBPw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/ianmugenya/ckvifybed07zd14o99ybskmni', // style URL
center: [36.817223, -1.286389], // starting position [lng, lat]
zoom: 14 // starting zoom
});

const size = 200;
 
// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
width: size,
height: size,
data: new Uint8Array(size * size * 4),
 
// When the layer is added to the map,
// get the rendering context for the map canvas.
onAdd: function () {
const canvas = document.createElement('canvas');
canvas.width = this.width;
canvas.height = this.height;
this.context = canvas.getContext('2d');
},
 
// Call once before every frame where the icon will be used.
render: function () {
const duration = 1000;
const t = (performance.now() % duration) / duration;
 
const radius = (size / 2) * 0.3;
const outerRadius = (size / 2) * 0.7 * t + radius;
const context = this.context;
 
// Draw the outer circle.
context.clearRect(0, 0, this.width, this.height);
context.beginPath();
context.arc(
this.width / 2,
this.height / 2,
outerRadius,
0,
Math.PI * 2
);
context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
context.fill();
 
// Draw the inner circle.
context.beginPath();
context.arc(
this.width / 2,
this.height / 2,
radius,
0,
Math.PI * 2
);
context.fillStyle = 'rgba(252, 104, 63, 1)';
context.strokeStyle = 'white';
context.lineWidth = 2 + 4 * (1 - t);
context.fill();
context.stroke();
 
// Update this image's data with data from the canvas.
this.data = context.getImageData(
0,
0,
this.width,
this.height
).data;
 
// Continuously repaint the map, resulting
// in the smooth animation of the dot.
map.triggerRepaint();
 
// Return `true` to let the map know that the image was updated.
return true;
}
};
 
map.on('load', () => {
map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
 
map.addSource('dot-point', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [36.817223, -1.286389] // icon position [lng, lat]
}
}
]
}
});
map.addLayer({
'id': 'layer-with-pulsing-dot',
'type': 'symbol',
'source': 'dot-point',
'layout': {
'icon-image': 'pulsing-dot'
}
});
});