var styles = [
	{
		featureType: 'landscape',
		elementType: 'geometry',
		stylers: [
			{ hue: '#dddddd' },
			{ saturation: -100 },
			{ lightness: -3 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'water',
		elementType: 'all',
		stylers: [

		]
	}
];
var options = {
	
	center: new google.maps.LatLng(40.742551, -74.0082778),
	zoom: 18,
	
	
};
var div = document.getElementById('map');
var map = new google.maps.Map(div, options);
