function initializeMap() {
	var lat = '19.4318126'; //Set your latitude.

	var lon = '-99.2021922'; //Set your longitude.

	var centerLon = lon - 0.0105;

	var myOptions = {
		scrollwheel: false,
		draggable: false,
		disableDefaultUI: true,
		center: new google.maps.LatLng(lat, centerLon),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	//Bind map to elemet with id map-canvas
	var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		title:"Ábaco Academy",
		position: new google.maps.LatLng(lat, lon),
	});

	var infowindow = new google.maps.InfoWindow({
		content: "<h2 class='marker-heading'>Urban Station</h2>"
	});

	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});

	infowindow.open(map, marker);
}