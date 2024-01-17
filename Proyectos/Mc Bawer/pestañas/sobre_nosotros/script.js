function iniciarMap(){
    var coord = {lat:-20.2811494 ,lng: -70.1010147};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    })
}

