function AppViewModel() {
   var self = this;
   this.searchText = ko.observable("");
   this.error = ko.observable("");
   this.locationArray = ko.observableArray([]);
   this.visibleArray = ko.observableArray([]);

   locations.forEach(function (location) {
      newLocation = new Location(location)
      newLocation.marker = createMarker(location.title, location.coordinates);
      self.locationArray.push(newLocation);
      self.visibleArray.push(newLocation);
   });

   this.locationArray().forEach(function (location) {
      $.ajax({
         url: 'https://api.foursquare.com/v2/venues/' + location.id() + '?client_id=' + foursquare_id + '&client_secret=' + foursquare_secret +'&v=201701401&m=foursquare',
         dataType: "json",
         success: function (data) {
            var result = data.response.venue;

            var address = result.hasOwnProperty('location') ? result.location : '';
            if (address.hasOwnProperty('address')) {
               location.address(address.address || 'n/a');
            }

            var rating = result.hasOwnProperty('rating') ? result.rating : '';
            location.rating(rating || 'n/a');

            var likes = result.hasOwnProperty('likes') ? result.likes : '';
            if (likes.hasOwnProperty('summary')) {
               location.likes(likes.summary || 'n/a');
            }

            var photo = result.hasOwnProperty('bestPhoto') ? result.bestPhoto : '';
            if (photo.hasOwnProperty('prefix') && photo.hasOwnProperty('suffix')) {
               var url = photo.prefix + '300x300' + photo.suffix;
               location.photo(url || 'n/a');
            }



         },

         complete: function (data) {

            var contentString = '<div class="result-info">' +
                                    '<p class="result-title">' + location.title() + '</p>' +
                                    '<p class="result-address">' + location.address() + '</p>' +
                                    '<p class="result-rating">' + location.rating() + '</p>' +
                                    '<p class="result-likes">' + location.likes() + '</p>' +
                                '</div>'



            var infowindow = new google.maps.InfoWindow({
               content: contentString
            });

            location.marker.addListener('click', function() {
               infowindow.open(map, location.marker);
            });

         },


         error: function (error) {
            var contentString = '<div class="result-info">' +
                                    '<p class="result-title">' + location.title + '</p>' +
                                '</div>'

            var infowindow = new google.maps.InfoWindow({
               content: contentString
            });

            location.marker.addListener('click', function() {
               infowindow.open(map, location.marker);
            });
         }
      });
   });

   this.filteredMarkers = ko.computed(function () {
      var search = self.searchText().toLowerCase();
      self.visibleArray.removeAll();
      self.locationArray().forEach(function (location) {
         location.marker.setVisible(false);
         if (location.title().toLowerCase().indexOf(search) > -1) {
            self.visibleArray.push(location);
         }
      });
      // If no results for search display error otherwise display results
      if (self.visibleArray().length == 0) {
         // Display no results error
         self.error("No Results");
      } else {
         // remove error message
         self.error("");
         self.visibleArray().forEach(function (location) {
            location.marker.setVisible(true);
         });
      }


   });

   self.getInfo = function(location) {
      map.setCenter(location.marker.position);
      map.setZoom(14);
   }

}
