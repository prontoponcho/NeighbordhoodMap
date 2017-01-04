var map = map || {};
var initLocations = initLocations || {};

var Location = function(data) {
	this.category = ko.observable(data.category);
	this.name = ko.observable(data.name);
	this.address = ko.observable(data.address);
	this.coordinates = ko.observable(data.coordinates);
	this.url = ko.observable(data.url);
};

var ViewModel = function() {
	var self = this;

	this.locations = ko.observableArray( [] );

	initLocations.forEach( function( loc ) {
		self.locations.push( new Location( loc ));
	});

};

ko.applyBindings(new ViewModel());