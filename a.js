  document.getElementById('button').addEventListener("click",function (e) {
    var ip = document.querySelector( "#ip" ).value;
    const options = {
method: 'GET',
};
fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2HZsSF5M7q8JEusPfCHHNDPoke411&ipAddress=${ip}`, options)
  .then(data => data.json())
  .then(info=>{
      const lat = info.location.lat;
      const long = info.location.lng;
      console.log(lat)
      console.log('cheating')
    var map = new L.Map('map', {
  center: new L.LatLng(lat,long),
  zoom: 15
});

// create a new tile layer
var tileUrl = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=d41a32013a7b4c9b897c291fb0e4865d',
layer = new L.TileLayer(tileUrl, {maxZoom: 18});

// add the layer to the map
map.addLayer(layer);
var marker = L.marker([lat,long]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>This is marker").openPopup();
map.destroy;
})

document.getElementById("refresh").addEventListener("onClick",function(e) {
    window.location.reload();
})
    





}) 
