var map;

function initMap() {
   // Create map and center on Austin, TX with custom styling
   map = new google.maps.Map(document.getElementById('map'), {
      center: austin,
      zoom: 12,
      styles: styles
   });

   // Start knockout.js after map loads
   ko.applyBindings(new AppViewModel());
}

// Returns new map marker from title and position
function createMarker(title, position) {

   var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: title,
      icon: 'img/marker.png',
      animation: google.maps.Animation.DROP
   });

   return marker;
}
