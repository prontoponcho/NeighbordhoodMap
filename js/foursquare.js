var clientID = 'MJUQEF0HQPLT3J5VQGH50ODDG33XGFE55AJLNVFYZEI2XIKE';
var clientSecret = 'EDZXTLTVLIXFL1ETXRCJ3HFSCA45BLUUMC1DUXGPYQ4N0RHB';
var foursquareAPI = 'https://api.foursquare.com/v2/venues/explore';
var version = '20170101';
var mode = 'foursquare';
var data = {
	v: version,
	m: mode,
	client_id: clientID,
	client_secret: clientSecret,
	ll: null
};


// Makes AJAX request to Foursquare API for recommened venues
// near the passed location.
var setRecommendedVenue = function( location ) {

	var coords = location.coordinates;
	data.ll = coords.lat + ',' + coords.lng;

	$.get(foursquareAPI, data)
	.done( function( data ) {
		var name = data.response.groups[0].items[0].venue.name;
		var url  = 'https://www.google.com/search?q=' + name;
		var link = $('<a>', {
			text: name,
			title: 'link to external website',
			target: '_blank',
			href: url
		}).prop("outerHTML");
		location.recommendation(link);
	})
	.fail( function() {
		location.recommendation("failed to load");
	});

};