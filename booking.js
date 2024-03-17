// JavaScript code to handle the placeholder behavior
document.getElementById('event').addEventListener('change', function() {
    const eventSelect = this;
    if (eventSelect.value === '') {
        // Disable and re-select the placeholder option if the user selects it
        eventSelect.disabled = true;
        eventSelect.selectedIndex = 0;
    }
});

// const eventSelect = document.getElementById('event');
// eventSelect.addEventListener('change', function() {
//     if (eventSelect.value === '') {
//         eventSelect.disabled = true;
//         eventSelect.selectedIndex = 0;
//     }
// });


 // Initialize and add the map
 function initMap() {
    // The location to center the map (you can adjust this to your desired default location)
    var centerLocation = { lat: -34.397, lng: 150.644 };

    // The map, centered at the default location
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8, // Adjust the initial zoom level as needed
        center: centerLocation,
    });

    // Add a marker at the default location
    var marker = new google.maps.Marker({
        position: centerLocation,
        map: map,
    });

    // Add a click event listener to update the marker position when the user clicks on the map
    map.addListener("click", function(event) {
        marker.setPosition(event.latLng);
        // Update the location input field (if you have one)
        document.getElementById("location").value = event.latLng.lat() + ", " + event.latLng.lng();
    });
}

