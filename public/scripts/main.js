// Functions

// from googleMaps api docs-gets current position and handles errors correctly
function watchLocation() {
  var startPos;
  var geoOptions = {
    maximumAge: 10 * 60 * 1000, // 10 minutes
    timeout: 5 * 10 // 10 seconds
  }

  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};
