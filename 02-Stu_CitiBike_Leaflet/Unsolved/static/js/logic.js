// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;

// Create the createMap function.
let myMap = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12
});


  // Create the tile layer that will be the background of our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


  // Create a baseMaps object to hold the lightmap layer.
let url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

  // Create an overlayMaps object to hold the bikeStations layer.

  d3.json(url).then(function(response) {
    
    // Create a new marker cluster group.
    let markers = L.markerClusterGroup();
    
  
    // Loop through the data.
    for (let i = 0; i < response.data.stations.length; i++) {
    
  
      // Set the data location property to a variable.
      let station = response.data.stations[i];
    
  
      // Check for the location property.
      if (station.lat && station.lon) {
     
  
        // Add a new marker to the cluster group, and bind a popup.
        markers.addLayer(L.marker([station.lat, station.lon])
          .bindPopup(station.name));
      }
  
    }
  
    // Add our marker cluster layer to the map.
    myMap.addLayer(markers);
  
  });
  
  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialise an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
