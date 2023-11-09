  function initMap() {
    var mapOptions = {
      center: { lat: 55.39594, lng: 10.38831 }, // Center the map on Odense, Denmark
      zoom: 15, // Set an appropriate initial zoom level
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Define an array of marker data
    var markers = [
      {
        position: { lat: 55.39570, lng: 10.38850 },
        title: 'Albani Torv',
      },
      {
        position: { lat: 55.39445, lng: 10.38394 },
        title: 'Odeon',
      },
    ];

    // Loop through the marker data array and create markers
    for (var i = 0; i < markers.length; i++) {
      var marker = new google.maps.Marker({
        position: markers[i].position,
        map: map,
        title: markers[i].title,
      });
    }
  }