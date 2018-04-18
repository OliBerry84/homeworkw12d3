document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map')

  const center = {lat: 51.7792737, lng: -10.0030243}; // where to center the map, latitude and longtitude
  const mainMap = new MapWrapper(mapContainer, center, 15);

  mainMap.addMarker(center);
  mainMap.addMarker({lat: 55.946962, lng:-3.201958})
  mainMap.addClickListener();
  // mainMap.addListener();

}); // dom end
