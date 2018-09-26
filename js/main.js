
console.log("Map Loaded");

var map

//Call the Map on Page Load
window.onload = initMap();

//Initialize the Map & Settings
function initMap() {
  var local = {lat: 42.9836148, lng: -81.2510619};
  var map = new google.maps.Map(document.getElementById('map'), {
  center: ({lat: 42.9847148, lng: -81.2510619}),
  zoom: 15,
  });

  map.setOptions({'scrollwheel': false});

// Marker Image
  var image = {
  url: 'images/map_marker.png',
  scaledSize : new google.maps.Size(50,50)
  };

// Marker Location
  var marker = new google.maps.Marker({
  position: local,
  map: map,
  animation: google.maps.Animation.DROP,
  title: 'Our Location',
  icon: image,
  });
}
