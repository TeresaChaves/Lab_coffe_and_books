
const centerPoint = {
    coords: {
        lat: 40.4466299007422,
        lng: - 3.6746561949108187
    },
    title: 'punto de centro'
}


function init() {

    new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 16,
            center: centerPoint.coords
        }
    )
}