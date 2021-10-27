  var mymap = L.map('map-id');
  var options = {
    key: geocoder_api_key,
    limit: 10
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);
  /* Mapbox Tileset
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.mapbox-traffic-v1',
    accessToken: mapbox_access_token,
  }).addTo(mymap);
  */
  L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
  }).addTo(mymap);
     var icon1 = L.icon({
       iconUrl: 'taj.png',
       iconSize: [20,20]
     });
     var marker1 = L.marker([27.17, 78.04], {icon: icon1}).addTo(mymap);{}
     marker1.bindPopup("<b>Taj Mahal</b><br> <p> The Taj Mahal is an ivory-white marble mausoleum.</p> <img src='https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg'/>").openPopup();
     marker1.on("click", function(e) {
     mymap.setView(e.latlng, 14);
    });
//
//     var circle = L.circle([51.508, -0.11], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5
//   }).addTo(mymap);
//
//   var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
//   ]).addTo(mymap);
//
// var polyline = L.polyline([
//   [51.506, -0.08],
//   [51.502, -0.06],
//   [51.507, -0.047]
// ]).addTo(mymap);
//
//   marker1.bindPopup("<b>Hello World!</b><br>I am a popup.").openPopup();
//   circle.bindPopup("I am a circle.");
//   polygon.bindPopup("I am a polygon.")
//
//    marker1.on("click", function(e) {
//    mymap.setView(e.latlng, 14);
//   });
//   circle.on("click", function(e) {
//     mymap.setView(e.latlng, 13);
//   });
//   polygon.on("click", function(e) {
//     mymap.setView(e.latlng, 13);
//   });
//
//   var ZoomViewer = L.Control.extend({
//     onAdd: function(){
//       var gauge = L.DomUtil.create('div');
//       gauge.style.width = '200px';
//       gauge.style.background = 'rgba(255,255,255,0.5)';
//       gauge.style.textAlign = 'left';
//       mymap.on('zoomstart zoom zoomend', function(ev) {
//         gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
//       })
//       return gauge;
//     }
//   });
// (new ZoomViewer).addTo(mymap);
//
mymap.setView([0,0], 1);
