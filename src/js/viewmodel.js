function AppViewModel() {
   // Set initial variables
   var self = this;
   this.searchText = ko.observable("");
   this.error = ko.observable("");
   this.locationArray = ko.observableArray([]);
   this.visibleArray = ko.observableArray([]);
   this.searchOpen = ko.observable(false);

   this.openSearch = function() {
      this.searchOpen(!this.searchOpen());
   }

   // Create new Location instance from location array items
   locations.forEach(function (location) {
      // Create new instance
      newLocation = new Location(location)
      // Create and save marker to created location
      newLocation.marker = createMarker(location.title, location.coordinates);
      // Add created location to arrays
      self.locationArray.push(newLocation);
      self.visibleArray.push(newLocation);
   });

   // Request Foursquare data for each location
   this.locationArray().forEach(function (location) {
      $.ajax({
         url: 'https://api.foursquare.com/v2/venues/' + location.id() + '?client_id=' + foursquare_id + '&client_secret=' + foursquare_secret +'&v=201701401&m=foursquare',
         dataType: "json",
         success: function (data) {
            var result = data.response.venue;

            // Save Foursquare address to location
            var address = result.hasOwnProperty('location') ? result.location : '';
            if (address.hasOwnProperty('address')) {
               location.address(address.address || 'n/a');
            }

            // Save Foursquare rating to location
            var rating = result.hasOwnProperty('rating') ? result.rating : '';
            location.rating(rating || 'n/a');

            // Save Foursquare likes to location
            var likes = result.hasOwnProperty('likes') ? result.likes : '';
            if (likes.hasOwnProperty('summary')) {
               location.likes(likes.summary || 'n/a');
            }

            // Save Foursquare photo url to location
            var photo = result.hasOwnProperty('bestPhoto') ? result.bestPhoto : '';
            if (photo.hasOwnProperty('prefix') && photo.hasOwnProperty('suffix')) {
               var url = photo.prefix + '300x300' + photo.suffix;
               location.photo(url || 'n/a');
            }
         },

         complete: function (data) {

            // Create info window html with Foursquare data once request is complete
            var contentString = '<div class="result-info">' +
                                    '<p class="result-title">' + location.title() + '</p>' +
                                    '<p class="result-address">' + location.address() + '</p>' +
                                    '<p class="result-rating">' + location.rating() + '</p>' +
                                    '<p class="result-likes">' + location.likes() + '</p>' +
                                '</div>'

            // Create new info window
            var infowindow = new google.maps.InfoWindow({
               content: contentString
            });

            // Connect info window with marker
            location.marker.addListener('click', function() {
               infowindow.open(map, location.marker);

               // Set marker to bounce when clicked unless already bouncing
               if (location.marker.getAnimation() !== null) {
                  location.marker.setAnimation(null);
               } else {
                  location.marker.setAnimation(google.maps.Animation.BOUNCE);
               }
            });
         },

         error: function (error) {

            // Create info window html without Foursquare data if error
            var contentString = '<div class="result-info">' +
                                    '<p class="result-title">' + location.title + '</p>' +
                                '</div>'

            // Create new info window
            var infowindow = new google.maps.InfoWindow({
               content: contentString
            });

            // Connect info window with marker
            location.marker.addListener('click', function() {
               infowindow.open(map, location.marker);

               // Set marker to bounce when clicked unless already bouncing
               if (location.marker.getAnimation() !== null) {
                  location.marker.setAnimation(null);
               } else {
                  location.marker.setAnimation(google.maps.Animation.BOUNCE);
               }
            });
         }
      });
   });

   // Filter markers with user input
   this.filteredMarkers = ko.computed(function () {

      // Save search in lowercase to compare to locations
      var search = self.searchText().toLowerCase();

      // Clear array containing visible markers
      self.visibleArray.removeAll();

      // Hide marker and add to visible array if matches search text
      self.locationArray().forEach(function (location) {

         // Hide marker
         location.marker.setVisible(false);

         // Add to visible array if matches search text
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

   // Center map on marker when selected from list
   this.getInfo = function(location) {
      map.setCenter(location.marker.position);
      map.setZoom(14);

      // Set marker to bounce when clicked unless already bouncing
      if (location.marker.getAnimation() !== null) {
         location.marker.setAnimation(null);
      } else {
         location.marker.setAnimation(google.maps.Animation.BOUNCE);
      }
   }
}
