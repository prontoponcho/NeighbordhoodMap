var map = map || {};
var markers = [];
var key = apiKey || "0";
var geocodeAPI = "https://maps.googleapis.com/maps/api/geocode/json";

var locations = [
    {
        name: "Gay City",
        address: "517 E Pike St, Seattle, WA 98122",
        url: "https://www.gaycity.org/",
    },
    {
        name: "Planned Parenthood",
        address: "2001 E Madison St, Seattle, WA 98122",
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98122/seattle-health-center-3309-91810?utm_campaign=seattle-health-center&utm_medium=organic&utm_source=local-listing",
    },
];

// Get each location's latitude & longitude from Google Geocode API
// Add markers to the map
for (var i = 0; i < locations.length; i++) {

    data = {
        address: locations[i].address,
        key: apiKey,
        title: locations[i].name
    };

    $.get(geocodeAPI, data, function(json) {
        var marker = new google.maps.Marker({
            position: json.results[0].geometry.location,
        });

        // To add the marker to the map
        marker.setMap(map);
    });

};


