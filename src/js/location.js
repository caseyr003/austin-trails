var Location = function (data) {
    "use strict";
    this.name = ko.observable(data.title);
    this.marker = ko.observable();
};

var locations = [
       {title: "Walnut Creek Metropolitan Park", coordinates: {lat: 30.399123, lng: -97.679489}},
       {title: "Red Bud Isle", coordinates: {lat: 30.290820, lng: -97.786839}},
       {title: "Emma Long Metropolitan Park", coordinates: {lat: 30.335234, lng: -97.838505}},
       {title: "Barton Creek Greenbelt", coordinates: {lat: 30.243167, lng: -97.800045}},
       {title: "St. Edward's Park", coordinates: {lat: 30.407556, lng: -97.791037}},
       {title: "River Place Nature Trail", coordinates: {lat: 30.356231, lng: -97.864022}}
     ];
