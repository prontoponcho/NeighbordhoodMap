var map = map || {};

var initMarker = function( loc, markers ) {

    var marker = new google.maps.Marker( {
        animation: google.maps.Animation.DROP,
        position: loc.coordinates,
        title: loc.name,
        map: map
    });

    // info window content
    var contentString = "<div class='content'>" +
        "<h4><a target='_blank' href='" + loc.url + "'>" + loc.name + "</a></h4>" +
        "<p>" + loc.address + "</p>" +
        "</div>";

    marker.infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    addClickEvents( marker, markers );

    markers.push(marker);

    return marker;
};

var addClickEvents = function( marker, markers ) {

    // marker animation
    marker.addListener('click', function( ) {

        // stop all animations, close all infowindows
        markers.forEach( function ( marker ) {
            marker.setAnimation(null);
            marker.infowindow.close();
        });

        marker.setAnimation(google.maps.Animation.BOUNCE);

        marker.infowindow.open(map, marker);

        google.maps.event.addListener(marker.infowindow, 'closeclick', function() {
            marker.setAnimation(null);
        });

        setTimeout(function () { marker.setAnimation(null); }, 2866);
    });
};

var Location = function( data, markers ) {
    this.category = ko.observable( data.category );
    this.name = ko.observable( data.name );
    this.address = ko.observable( data.address );
    this.coordinates = ko.observable( data.coordinates );
    this.url = ko.observable( data.url );
    this.viewable = ko.observable( true );
    this.marker = ko.observable( initMarker( data, markers ) );
    // this.foursquareTip = ko.observable( new FourSquareTip( data.name ));
};

var ViewModel = function() {

    var self = this;
    self.locations = ko.observableArray( [] );
    self.markers = [];

    initLocations.forEach( function( loc ) {
        var location = new Location( loc, self.markers );
        self.locations.push( location );
    });

    self.filterSexualHealth = function() {
        self.locations().forEach( function( loc ) {
            if (loc.category() !== 'sexual health') {
                loc.viewable(false);
                loc.marker().infowindow.close();
                loc.marker().setMap(null);
            } else {
                loc.viewable(true);
                loc.marker().setMap(map);
            }
        });
    };

    self.filterUrgentCare = function() {
        self.locations().forEach( function( loc ) {
            if (loc.category() !== 'urgent care') {
                loc.viewable(false);
                loc.marker().infowindow.close();
                loc.marker().setMap(null);
            } else {
                loc.viewable(true);
                loc.marker().setMap(map);
            }
        });
    };

    self.filterAllCategories = function() {
        self.locations().forEach( function ( loc ) {
            loc.viewable(true);
            loc.marker().infowindow.close();
            loc.marker().setMap(map);
        })
    };

    self.animateMarker = function( clickedLocation ) {

        // look into why convenience function doesn't work here.
        // addClickEvents(clickedLocation.marker(), self.markers);

        var marker = clickedLocation.marker();

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

    initMap();

    ko.applyBindings( new ViewModel() );

};



