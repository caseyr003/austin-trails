var map;
var markers = []

function initMap() {
   // Constructor creates a new map - only center and zoom are required.
   map = new google.maps.Map(document.getElementById('map'), {
      center: austin,
      zoom: 12,
      styles: styles
   });


   // Start knockout.js after map loads
   ko.applyBindings(new AppViewModel());
}

function createMarker(title, position) {
   // Create a marker per location, and put into markers array.
   var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: title,
      icon: 'img/marker.png'
   });

   var contentString = '<div id="content" style="color:#000">' + marker.title + '</div>';

   var infowindow = new google.maps.InfoWindow({
     content: contentString
   });

   marker.addListener('click', function() {
      infowindow.open(map, marker);
   });

   return marker;
}

// Sets the map on all markers in the array.
function setMapOnAll() {
   for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
   }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
   setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
   setMapOnAll(map);
}
