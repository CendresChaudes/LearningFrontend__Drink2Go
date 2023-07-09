const MAP_SETUP={lat:59.9685,lng:30.3175,scale:18},MARKER_SETUP={url:"../../img/content/map/map-pin.svg",size:[38,50],isDraggable:!1},createPin=e=>L.icon({iconUrl:e,iconSize:MARKER_SETUP.size,iconAnchor:[MARKER_SETUP.size[0]/2,MARKER_SETUP.size]});function createMarker(e,a,t,n,r){return L.marker({lat:e,lng:a},{draggable:n,icon:createPin(t)})}const initMapModule=()=>{const e=L.map("map").on("load").setView({lat:MAP_SETUP.lat,lng:MAP_SETUP.lng},MAP_SETUP.scale);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(e);createMarker(MAP_SETUP.lat,MAP_SETUP.lng,MARKER_SETUP.url,MARKER_SETUP.isDraggable).addTo(e)};export{initMapModule};