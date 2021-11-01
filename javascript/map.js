  var mymap = L.map('map-id', {
    fullscreenControl: true,
    fullscreenControlOptions: {
   position: 'topleft'
 }
});

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

//
  L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
  }).addTo(mymap);

    var icon1 = L.icon({
       iconUrl: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-travel-and-destination-taj-mahal-icon-with-outline-style-png-image_3993275.jpg',
       iconSize: [30,30]
     });
    var marker1 = L.marker([27.17, 78.04], {icon: icon1}).addTo(mymap);{}
     marker1.bindPopup("<b>Taj Mahal</b><br> <p> The Taj Mahal is an ivory-white marble mausoleum.</p> <img src='https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg'/>").openPopup();
     marker1.on("click", function(e) {
     mymap.setView(e.latlng, 14);
    });

    var icon2 = L.icon({
      iconUrl: 'https://png.pngtree.com/png-clipart/20190917/original/pngtree-hand-drawn-yellow-great-wall-illustration-png-image_4601290.jpg',
      iconSize: [30,30]
    });
    var marker2 = L.marker([40.33, 116.47], {icon: icon2}).addTo(mymap);{}
    marker2.bindPopup("<b>Great Wall</b><br> <p>The Great Wall of China is an ancient structure in China. It was finished in 1878 and it was meant to protect the north of the empire.</p> <img src='https://media.nationalgeographic.org/assets/photos/310/436/e98bf54c-f84b-4a8c-81a6-ae66279cd62d.jpg'/>").openPopup();
    marker2.on("click", function(e) {
    mymap.setView(e.latlng, 14);
   });

   var icon3 = L.icon({
     iconUrl: 'https://png.pngtree.com/png-clipart/20190903/original/pngtree-yellow-desert-decoration-free-material-png-image_4442017.jpg',
     iconSize: [30,30]
   });
   var marker3 = L.marker([30.32, 35.44], {icon: icon3}).addTo(mymap);{}
   marker3.bindPopup("<b>Petra</b><br> <p>Petra is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah.</p> <img src='https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/11/tahw71-1.jpg'/>").openPopup();
   marker3.on("click", function(e) {
   mymap.setView(e.latlng, 14);
   });

   var icon4 = L.icon({
     iconUrl: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-jesus-wearing-white-png-image_5369129.jpg',
     iconSize: [30,30]
   });
   var marker4 = L.marker([-22.95, -43.21], {icon: icon4}).addTo(mymap);{}
   marker4.bindPopup("<b>Christ The Redeemer</b><br> <p>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro. Constructed between 1922 and 1931. </p> <img src='https://cdn.britannica.com/s:690x388,c:crop/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg'/>").openPopup();
   marker4.on("click", function(e) {
   mymap.setView(e.latlng, 14);
   });

   var icon5 = L.icon({
     iconUrl: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-mountain-png-image_526874.jpg',
     iconSize: [30,30]
   });
   var marker5 = L.marker([-13.16, -72.54], {icon: icon5}).addTo(mymap);{}
   marker5.bindPopup("<b>Machu Picchu</b><br> <p>Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. </p> <img src='https://i.guim.co.uk/img/media/b56952349419f749667d43f38b4d05e2980821a2/0_176_6016_3611/master/6016.jpg?width=700&quality=45&auto=format&fit=max&dpr=2&s=16ba79d77ef6eaf0c31c4de8d27ada36'/>").openPopup();
   marker5.on("click", function(e) {
   mymap.setView(e.latlng, 14);
   });

   var icon6 = L.icon({
     iconUrl: 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-pyramids-illustration-vector-on-white-background-png-image_5295834.jpg',
     iconSize: [30,30]
   });
   var marker6 = L.marker([20.68, -88.56], {icon: icon6}).addTo(mymap);{}
   marker6.bindPopup("<b>Chichen Itza</b><br> <p>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. </p> <img src='https://cdn.britannica.com/s:800x450,c:crop/86/179586-138-8B763D72/Overview-Chichen-Itza-Yucatan-Mexico.jpg'/>").openPopup();
   marker6.on("click", function(e) {
   mymap.setView(e.latlng, 14);
   });

   var icon7 = L.icon({
     iconUrl: 'https://png.pngtree.com/png-clipart/20190921/original/pngtree-cartoon-illustration-of-the-colosseum-png-image_4690020.jpg',
     iconSize: [30,30]
   });
   var marker7 = L.marker([41.89, 12.49], {icon: icon7}).addTo(mymap);{}
   marker7.bindPopup("<b>Colosseum</b><br> <p>The Colosseum is an oval amphitheatre in the content of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built. </p> <img src='https://media.cntraveler.com/photos/59d3a805ddaded4e04772233/16:9/w_2560%2Cc_limit/Rome_GettyImages-841851056.jpg'/>").openPopup();
   marker7.on("click", function(e) {
   mymap.setView(e.latlng, 14);
   });


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
