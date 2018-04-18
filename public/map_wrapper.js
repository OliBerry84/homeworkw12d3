const MapWrapper = function(container, center, zoomLevel){ // container element is where we put the map
  this.googleMap = new google.maps.Map(container, {    // pass it 2 things, where it's going and the object with all the settings
  center: center,
  zoom: zoomLevel
});

  this.markers = [];

}

MapWrapper.prototype.addMarker = function(coords){ // coords are where the marker will go
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  this.markers.push(marker) // pushes marker variable created above into array to keep track of each marker put on the map
}

MapWrapper.prototype.addClickListener = function(){ // going to be a click event and passes in the googleMap defined above
  google.maps.event.addListener(this.googleMap, 'click', (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.addMarker({lat: lat, lng: lng});
  });
}

const infoWindowContent =
'<h3>CodeClan</h3>' +
'<p>This is where I attempt to learn to code Google Maps and Info Windows</p>';

// Initialise the inforWindow
const infoWindow = new google.maps.InfoWindow({
  content: infoWindowContent
});

// Add a marker to the map based on our coordinates
MapWrapper.prototype.addMarker = function(coords){
  const markerPopup = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    title: 'CodeClan, Edinburgh'
  });
}

  // Display our info window when the marker is clicked
  google.maps.event.addListener(this.googleMap, 'click', function() {
    infoWindow.open(map, marker);
  });
