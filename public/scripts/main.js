// Functions

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
        if (error.code == 0) {
            console.log('Error occurred: Uknown');
        }
        if (error.code == 1) {
            console.log('Error occurred: permission denied')
        }
        if (error.code == 2) {
            console.log('Error occurred: position unavailable')
        }
        if (error.code == 3) {
            console.log('Error occured: timed out :()')
        }
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};
