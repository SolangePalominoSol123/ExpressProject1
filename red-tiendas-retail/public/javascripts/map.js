var map = L.map('map').setView([-12.0689502,-77.0802495], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([-12.0689502,-77.0802495]).addTo(map);
L.marker([-12.0618288,-77.0515014]).addTo(map);