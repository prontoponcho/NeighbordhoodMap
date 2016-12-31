var map;
var lat = 47.6278632;
var lng = -122.3333217;
var zoom = 14;
var mapTypeId = 'terrain'

function initMap() {
    map = new google.maps.Map( document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: zoom,
        mapTypeId: mapTypeId
    });
}

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

