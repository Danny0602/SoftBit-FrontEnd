function iniciarMap() {
    var coord = { lat: 25.8301687392248, lng: -100.2763042290232 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}