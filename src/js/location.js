var Location = function (data) {
    "use strict";
    this.title = ko.observable(data.title);
    this.id = ko.observable(data.id);
    this.marker = ko.observable();
    this.address = ko.observable('');
    this.rating = ko.observable('');
    this.likes = ko.observable('');
    this.photo = ko.observable('');
};

var locations = [
   {title: "Walnut Creek Metropolitan Park", id: "4ae37a96f964a520a39521e3", coordinates: {lat: 30.399123, lng: -97.679489}},
   {title: "Red Bud Isle", id: "49c1de70f964a520d7551fe3", coordinates: {lat: 30.290820, lng: -97.786839}},
   {title: "Emma Long Metropolitan Park", id: "49f3314df964a5206b6a1fe3", coordinates: {lat: 30.335234, lng: -97.838505}},
   {title: "Barton Creek Greenbelt", id: "4ae33705f964a520c69121e3", coordinates: {lat: 30.243167, lng: -97.800045}},
   {title: "St. Edward's Park", id: "4b328c55f964a520530e25e3", coordinates: {lat: 30.407556, lng: -97.791037}},
   {title: "River Place Nature Trail", id: "4da9e0594df01c19b17cabce", coordinates: {lat: 30.356231, lng: -97.864022}}
];
