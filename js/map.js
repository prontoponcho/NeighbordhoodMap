var map;
var lat = 47.6278632;
var lng = -122.3333217;
var zoom = 14;
var mapTypeId = 'terrain';
var mobileZoom = 12;
var desktopZoom = 14;
var apiKey = "AIzaSyBPOJXFTbJh9jn8Mg09QENs5BaEXNgDpw0";

// center map solution at:
// http://stackoverflow.com/questions/8792676/center-google-maps-v3-on-browser-resize-responsive
var center;
function calculateCenter() {
    center = map.getCenter();
};

function initMap() {
    map = new google.maps.Map( document.getElementById('map'), {
        center: {lat: lat, lng: lng},
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
          }
    });
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



// var mapAPI = "https://maps.googleapis.com/maps/api/js?";
// var apiKey = "AIzaSyBPOJXFTbJh9jn8Mg09QENs5BaEXNgDpw0";
// var callback = "initMap";
// var params = { "key" : apiKey,
//                "callback" : callback
//              };
// mapURL = mapAPI + $.param(params);

// console.log(mapURL);

// $.ajax(mapURL).error( function(e) {
//     var error = "Could not load the map."
//     $('map').text(error);
// });

