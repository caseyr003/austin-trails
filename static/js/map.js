var map;
function initMap() {
   // Constructor creates a new map - only center and zoom are required.
   map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.32500, lng: -97.65000},
      zoom: 13
   });
}
