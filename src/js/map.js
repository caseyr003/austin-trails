var map;

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

   var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: title,
      icon: 'img/marker.png'
   });

   return marker;
}
