let myMap

window.onload = () => {
    const PlazaNuevaEspaña = {
        lat: 40.464566,
        lng: -3.686461
    }


    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: PlazaNuevaEspaña,
        styles: mapStyles.IronMAn
    });

    getEvents()

}

function getEvents() {
    axios.get("/events/api")
        .then(response => {
            console.log("LA RESPUESTA DEL SERVIDOR ES", response)
            placeEvents(response.data.events)
        })
        .catch(error => console.log(error))
}

function placeEvents(events) {
    events.forEach(event => {
        const center = {
            lat: event.location.coordinates[1],
            lng: event.location.coordinates[0]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: event.name
        })
    })

    myMap.setCenter({
        lat: event[0].location.coordinates[1],
        lng: event[0].location.coordinates[0]
    })
}