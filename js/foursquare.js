var clientID = 'MJUQEF0HQPLT3J5VQGH50ODDG33XGFE55AJLNVFYZEI2XIKE';
var clientSecret = 'EDZXTLTVLIXFL1ETXRCJ3HFSCA45BLUUMC1DUXGPYQ4N0RHB';
var foursquareAPI = 'https://api.foursquare.com/v2/venues/search?';
var version = '20170101';
var mode = 'foursquare';
var data = {
	v: version,
	m: mode,
	client_id: clientID;
	client_secret: clientSecret;
};

var FourSquareTip = function( locationName ) {
	this.tip
}