function AppViewModel() {
   var self = this;
   this.searchText = ko.observable("");
   this.locationArray = ko.observableArray([]);

   locations.forEach(function (location) {
      newLocation = new Location(location)
      self.locationArray.push(newLocation);
      var marker = createMarker(location.title, location.coordinates);
      newLocation.marker = marker;
   });

   this.filteredMarkers = ko.computed(function () {
      var search = self.searchText().toLowerCase();
      return ko.utils.arrayFilter(self.locationArray(), function (location) {
         return location.name().toLowerCase().indexOf(search) >= 0;
      });
   });

}
