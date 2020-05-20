   function initMap() {
            let map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.720372,
                    lng: -33.345877
                }
            });
            let labels = "ABCDIFGHIJKLMNOPQRSTUVWXYZ";
            
            let locations =[{
                lat: 40.785091,
                lng: -73.968285
            }, {
                lat: 41.084045,
                lng: -73.874256
            }, {
                lat: 40.754932,
                lng: -73.984016
            }]; 

            let markers = locations.map(function(locations,i){

                return new google.maps.Marker({
                    position: locations,
                    label: labels[i % labels.length]
                });

            });
             let markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });

        }