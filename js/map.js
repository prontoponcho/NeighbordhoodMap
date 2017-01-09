var map;
var mobileZoom = 12;
var desktopZoom = 14;
var initLocations = [
    {
        category: "sexual health",
        name: "Gay City",
        address: "517 E Pike St, Seattle, WA 98122",
        coordinates: {lat: 47.6139121, lng: -122.3246327},
        url: "https://www.gaycity.org/",
        marker: null,
        recommendation: null,
        foursquareVenueID: '4c7bda6c88449eb0918fab79'
    },
    {
        category: "sexual health",
        name: "Planned Parenthood, Seattle",
        address: "2001 E Madison St, Seattle, WA 98122",
        coordinates: {lat: 47.6173163, lng: -122.3050968},
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98122/seattle-health-center-3309-91810?utm_campaign=seattle-health-center&utm_medium=organic&utm_source=local-listing",
        marker: null,
        recommendation: null,
        foursquareVenueID: '4b1d3b20f964a5205e0d24e3'
    },
    {
        category: "sexual health",
        name: "Planned Parenthood, First Hill",
        address: "1229 Madison St #1040, Seattle, WA 98104",
        coordinates: {lat: 47.6100869, lng: -122.3221135},
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98104/first-hill-health-center-4069-91810?utm_campaign=first-hill-health-center&utm_medium=organic&utm_source=local-listing",
        marker: null,
        recommendation: null,
        foursquareVenueID: '507f1ca5f470e2e0be60c00b'
    },
    {
        category: "urgent care",
        name: "Group Health, Capitol Hill",
        address: "201 16th Ave. E. Seattle, WA 98112",
        coordinates: {lat: 47.6195658, lng: -122.3124495},
        url: "https://www.ghc.org/html/public/locations/capitol-hill",
        marker: null,
        recommendation: null,
        foursquareVenueID: '4b80ca41f964a520358c30e3'
    },
    {
        category: "urgent care",
        name: "ZOOM+ Care, Capitol Hill",
        address: "531 Broadway E #10, Seattle, WA 98102",
        coordinates: {lat: 47.624008, lng: -122.3214887},
        url: "https://www.zoomcare.com/clinic/zoomcare-capitol-hill",
        marker: null,
        recommendation: null,
        foursquareVenueID: '4e821d2b61af3dafdc7427cd'
    },
    {
        category: "urgent care",
        name: "Immediate Clinic, Capitol Hill",
        address: "1512 Broadway, Seattle, WA 98122",
        coordinates: {lat: 47.6145224, lng: -122.3204054},
        url: "https://www.immediateclinic.com/capitol-hill-urgent-care",
        marker: null,
        recommendation: null,
        foursquareVenueID: '54c90a1d498e98ce03a007bc'
    }
];


// center map solution at:
// http://stackoverflow.com/questions/8792676/center-google-maps-v3-on-browser-resize-responsive
var center;
var calculateCenter = function() {
    center = map.getCenter();
};


function initMap() {

    var zoom = window.innerWidth <= 767 ? mobileZoom : desktopZoom;

    var mapOptions = {
        center: {
            lat: 47.6178632,
            lng: -122.3333217
        },
        zoom: zoom,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ]
    };

    map =  new google.maps.Map( document.getElementById('map'), mapOptions);

    // zoom out for mobile screens, zoom in for larger screens
    // recenter the map when resizing the window
    google.maps.event.addDomListener(window, 'resize', function() {
        if (window.innerWidth <= 767) {
            map.setZoom(mobileZoom);
        } else {
            map.setZoom(desktopZoom);
        }
        map.setCenter(center);
    });

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });

};


var initMarker = function( loc, markers ) {

    var marker = new google.maps.Marker( {
        animation: google.maps.Animation.DROP,
        position: loc.coordinates,
        title: loc.name,
        icon: 'img/map-marker.png',
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

    return marker;
};


var addClickEvents = function( marker, markers ) {

    // marker animation
    marker.addListener('click', function( ) {

        // stop all animations and close all infowindows
        markers.forEach( function ( marker ) {
            marker.setAnimation(null);
            marker.infowindow.close();
        });

        marker.setAnimation(google.maps.Animation.BOUNCE);

        marker.infowindow.open(map, marker);

        google.maps.event.addListener(marker.infowindow, 'closeclick', function() {
            marker.setAnimation(null);
        });

        // marker animates for ~4 bounces
        setTimeout(function () { marker.setAnimation(null); }, 2866);
    });
};


var googleError = function() {
    alert("Error loading Google Map. Try reloading the page.");
}














