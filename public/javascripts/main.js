let myMap

window.onload = () => {
    const PlazaNuevaEspaña = {
        lat: 40.464566,
        lng: -3.686461
    }


    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 12,
        center: PlazaNuevaEspaña,
        styles: mapStyles.IronMAn
    })

    
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
            lat: event.coordinates[1],
            lng: event.coordinates[0]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: event.name   
        })
    })

    myMap.setCenter({
        lat: events[0].coordinates[1],
        lng: events[0].coordinates[0]
    })
}
