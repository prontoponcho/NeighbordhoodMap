var map = map || {};

var Location = function( data ) {
    this.category = data.category;
    this.name = data.name;
    this.address = data.address;
    this.coordinates = data.coordinates;
    this.url = data.url;
    this.viewable = ko.observable( true );
    this.marker = data.marker;
    this.recommendation = ko.observable(data.recommendation);
};

var ViewModel = function() {

    var self = this;
    self.locations = ko.observableArray( [] );
    self.markers = [];

    initLocations.forEach( function( data ) {
        var marker = initMarker( data, self.markers );
        self.markers.push( marker );
        data.marker = marker;
        var location = new Location( data );
        setRecommendedVenue( location );
        self.locations.push( location );
    });

    self.filterSexualHealth = function() {
        self.locations().forEach( function( loc ) {
            if (loc.category !== 'sexual health') {
                loc.viewable(false);
                loc.marker.infowindow.close();
                loc.marker.setMap(null);
            } else {
                loc.viewable(true);
                loc.marker.setMap(map);
            }
        });
    };

    self.filterUrgentCare = function() {
        self.locations().forEach( function( loc ) {
            if (loc.category !== 'urgent care') {
                loc.viewable(false);
                loc.marker.infowindow.close();
                loc.marker.setMap(null);
            } else {
                loc.viewable(true);
                loc.marker.setMap(map);
            }
        });
    };

    self.filterAllCategories = function() {
        self.locations().forEach( function ( loc ) {
            loc.viewable(true);
            loc.marker.infowindow.close();
            loc.marker.setMap(map);
        })
    };

    self.animateMarker = function( clickedLocation ) {

        // look into why convenience function doesn't work here.
        // addClickEvents(clickedLocation.marker(), self.markers);

        var marker = clickedLocation.marker;

        // stop all other markers from bouncing
        // close all other marker infowindows
        self.markers.forEach( function ( marker ) {
            marker.setAnimation(null);
            marker.infowindow.close();
        });

        marker.setAnimation(google.maps.Animation.BOUNCE);

        marker.infowindow.open(map, marker);

        google.maps.event.addListener(marker.infowindow, 'closeclick', function() {
            marker.setAnimation(null);
        });

        setTimeout(function () { marker.setAnimation(null); }, 2866);
    };

};


var initViewModel = function() {

    // Check if google map script loaded yet.
    if (typeof google === 'undefined' || google === null) {
        alert('Variable "google" is undefined. Try reloading the page.');
    } else {
        initMap();
        ko.applyBindings( new ViewModel() );
    }

};



