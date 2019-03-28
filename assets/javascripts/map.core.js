var initMap = function() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 58.545609, lng: 24.75219727 },
		zoom: 8,
		mapTypeControl: false,
		streetViewControl: false,
		styles: mapstyle
	});
}
