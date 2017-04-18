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

   this.filteredMarkers = ko.computed(function () {
      var search = self.searchText().toLowerCase();
      self.visibleArray.removeAll();
      self.locationArray().forEach(function (location) {
         location.marker.setVisible(false);
         if (location.name().toLowerCase().indexOf(search) > -1) {
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
      console.log(location);
      map.setCenter(location.marker.position);
      map.setZoom(14);
   }

}
