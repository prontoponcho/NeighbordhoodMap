var map = map || {};
var markers = [];
var key = apiKey || "0";
var geocodeAPI = "https://maps.googleapis.com/maps/api/geocode/json";

var locations = [
    {
        category: "sexual health",
        name: "Gay City",
        address: "517 E Pike St, Seattle, WA 98122",
        url: "https://www.gaycity.org/"
    },
    {
        category: "sexual health",
        name: "Planned Parenthood, Seattle",
        address: "2001 E Madison St, Seattle, WA 98122",
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98122/seattle-health-center-3309-91810?utm_campaign=seattle-health-center&utm_medium=organic&utm_source=local-listing"
    },
    {
        category: "sexual health",
        name: "Planned Parenthood, First Hill",
        address: "1229 Madison St #1040, Seattle, WA 98104",
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98104/first-hill-health-center-4069-91810?utm_campaign=first-hill-health-center&utm_medium=organic&utm_source=local-listing"
    },
    {
        category: "urgent care",
        name: "Group Health, Capitol Hill",
        address: "201 16th Ave. E. Seattle, WA 98112",
        url: "https://www.ghc.org/html/public/locations/capitol-hill"
    },
    {
        category: "urgent care",
        name: "ZOOM+ Care, Capitol Hill",
        address: "531 Broadway E #10, Seattle, WA 98102",
        url: "https://www.zoomcare.com/clinic/zoomcare-capitol-hill"
    },
    {
        category: "urgent care",
        name: "Immediate Clinic, Capitol Hill",
        address: "1512 Broadway, Seattle, WA 98122",
        url: "https://www.immediateclinic.com/capitol-hill-urgent-care"
    }
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


