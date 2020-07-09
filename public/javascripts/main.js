let myMap;



window.onload = () => {
  const PlazaNuevaEspaña = {
    lat: -3.686461,
    lng: 40.464566
  }
  

  myMap = new google.maps.Map(document.getElementById("myMap"), {
    zoom: 12,
    center: PlazaNuevaEspaña,
    styles: mapStyles.IronMan,
  })
  const myMarker = new google.maps.Marker({
    position: PlazaNuevaEspaña,
    map: myMap,
    title: "Plaza Nueva España"
    
})
  getEvents();
}

function getEvents() {
    
  axios
    .get("/events/api")
    .then((response) => {
        
      console.log("LA RESPUESTA DEL SERVIDOR ES", response);
       placeEvents(response.data);
    })
    .catch((error) => console.log(error));
}

function placeEvents(events) {
  events.forEach((event) => {
      console.log(event)
    const center = {
      lat: event.coordinates[0],
      lng: event.coordinates[1],
    }
    new google.maps.Marker({
      position: center,
      map: myMap,
      title: event.name,
     // icon: "images/icons8-iron-man-48.png",
     // animation: google.maps.Animation.DROP
    })
  })

  myMap.setCenter({
    lat: events[0].coordinates[0],
    lng: events[0].coordinates[1],
  })
}
