var map = map || {};
var markers = markers || [];
var infoWindows = infoWindows || [];
var initLocations = initLocations || [];

var Location = function(data) {
    this.category = ko.observable(data.category);
    this.name = ko.observable(data.name);
    this.address = ko.observable(data.address);
    this.coordinates = ko.observable(data.coordinates);
    this.url = ko.observable(data.url);
    this.viewable = ko.observable(true);
};

var ViewModel = function() {
    var self = this;

    this.locations = ko.observableArray( [] );

    initLocations.forEach( function( loc ) {
        self.locations.push( new Location( loc ));
    });

    this.filterSexualHealth = function() {
        self.locations().forEach( function( loc ) {
            if (loc.category() !== 'sexual health') {
                loc.viewable(false);
            } else {
                loc.viewable(true);
            }
        });
    };

    this.filterUrgentCare = function() {
        self.locations().forEach( function( loc ) {
            if (loc.category() !== 'urgent care') {
                loc.viewable(false);
            } else {
                loc.viewable(true);
            }
        });
    };

    this.filterAllCategories = function() {
        self.locations().forEach( function ( loc ) {
            loc.viewable(true);
        })
    };

};

ko.applyBindings(new ViewModel());