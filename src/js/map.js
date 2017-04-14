var locations = [
       {title: "Walnut Creek Metropolitan Park", location: {lat: 30.399123, lng: -97.679489}},
       {title: "Red Bud Isle", location: {lat: 30.290820, lng: -97.786839}},
       {title: "Emma Long Metropolitan Park", location: {lat: 30.335234, lng: -97.838505}},
       {title: "Barton Creek Greenbelt", location: {lat: 30.243167, lng: -97.800045}},
       {title: "St. Edward's Park", location: {lat: 30.407556, lng: -97.791037}},
       {title: "River Place Nature Trail", location: {lat: 30.356231, lng: -97.864022}}
     ];

var map;
function initMap() {

   // Create a styles array to use with the map.
   var styles = [
          {
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#f5f5f2"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.medical",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.place_of_worship",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.school",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#ffffff"
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "color": "#ffffff"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "stylers": [
                  {
                      "color": "#71c8d4"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "stylers": [
                  {
                      "color": "#e5e8e7"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "stylers": [
                  {
                      "color": "#8ba129"
                  }
              ]
          },
          {
              "featureType": "road",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#c7c7c7"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "stylers": [
                  {
                      "color": "#a0d3d3"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "stylers": [
                  {
                      "color": "#91b65d"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "stylers": [
                  {
                      "gamma": 1.51
                  }
              ]
          },
          {
              "featureType": "road.local",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi.government",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road"
          },
          {
              "featureType": "road"
          },
          {},
          {
              "featureType": "road.highway"
          }
   ];

   // Constructor creates a new map - only center and zoom are required.
   map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.399123, lng: -97.679489},
      zoom: 13,
      styles: styles
   });



   var icon = 'img/marker.png'

   for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      var position = locations[i].location;
      var title = locations[i].title;
      // Create a marker per location, and put into markers array.
      var marker = new google.maps.Marker({
         position: position,
         map: map,
         title: title,
         icon: icon
      });
   }
}

var Location = function (data) {
    "use strict";
    this.name = ko.observable(data.title);
};

function AppViewModel() {
   this.searchText = ko.observable("");

   this.locationArray = ko.observableArray([]);
   var self = this;
    locations.forEach(function (location) {
        self.locationArray.push(new Location(location));
    });

   self.filteredMarkers = ko.computed(function () {
       var search = self.searchText().toLowerCase();
       return ko.utils.arrayFilter(self.locationArray(), function (location) {
           return location.name().toLowerCase().indexOf(search) >= 0;
       });
   });

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
