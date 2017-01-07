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
        marker: null
    },
    {
        category: "sexual health",
        name: "Planned Parenthood, Seattle",
        address: "2001 E Madison St, Seattle, WA 98122",
        coordinates: {lat: 47.6100869, lng: -122.3221135},
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98122/seattle-health-center-3309-91810?utm_campaign=seattle-health-center&utm_medium=organic&utm_source=local-listing",
        marker: null
    },
    {
        category: "sexual health",
        name: "Planned Parenthood, First Hill",
        address: "1229 Madison St #1040, Seattle, WA 98104",
        coordinates: {lat: 47.6145224, lng: -122.3204054},
        url: "https://www.plannedparenthood.org/health-center/washington/seattle/98104/first-hill-health-center-4069-91810?utm_campaign=first-hill-health-center&utm_medium=organic&utm_source=local-listing",
        marker: null
    },
    {
        category: "urgent care",
        name: "Group Health, Capitol Hill",
        address: "201 16th Ave. E. Seattle, WA 98112",
        coordinates: {lat: 47.6173163, lng: -122.3050968},
        url: "https://www.ghc.org/html/public/locations/capitol-hill",
        marker: null
    },
    {
        category: "urgent care",
        name: "ZOOM+ Care, Capitol Hill",
        address: "531 Broadway E #10, Seattle, WA 98102",
        coordinates: {lat: 47.6195658, lng: -122.3124495},
        url: "https://www.zoomcare.com/clinic/zoomcare-capitol-hill",
        marker: null
    },
    {
        category: "urgent care",
        name: "Immediate Clinic, Capitol Hill",
        address: "1512 Broadway, Seattle, WA 98122",
        coordinates: {lat: 47.624008, lng: -122.3214887},
        url: "https://www.immediateclinic.com/capitol-hill-urgent-care",
        marker: null
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
            lat: 47.6278632,
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
        }
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















