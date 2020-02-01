//config
var gZoom = 11;

//locations
var eastCoast = [-67.13734351262877, 45.137451890638886];
var gilroy = [-121.568275, 37.005783];
var gilroy2 = switchLatLng([37.013035, -121.531174]);
var chestnutStHub = switchLatLng([37.003319, -121.560893]);
var launchpad = switchLatLng([37.787787, -122.396555]);
var moveToLoc = chestnutStHub;
var startLocation = chestnutStHub;

var locations = [
  gilroy,
  gilroy2,
  chestnutStHub
];

class API {
  constructor() {
    this.baseUrl = 'http://localhost:5000/'
  }
  
  async fetchPolygons() {
    var route = 'fetchPolygons';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {
      foo: 'bar'
    });
  }

  async fetchPins() {
    var route = 'fetchPins';
    var url = `${this.baseUrl}${route}`;
    var { data } = await axios.post(url, {
      foo: 'bar'
    });
  }
}

var api = new API();
// api.fetchPins();

(function main() {
  var $searchForm = document.querySelector('.search-form');
  var $searchInput = document.querySelector('#search');

  mapboxgl.accessToken = 'pk.eyJ1IjoiaGF5ZGVuMzIxIiwiYSI6ImNrNjM3Zjg4ZzA3MDAza284a2p6dmpjcWUifQ.MQ-kLHA7IuWQ3BMeYE-XAA';
  var mapboxObj = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-streets-v9', // stylesheet location
    center: startLocation, // starting position [lng, lat]
    zoom: gZoom // starting zoom
  });

  var M = new Map({
    map: mapboxObj,
  });
  
  var map = M.getMap();

  // zip code submit handler
  $searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $searchInput.value = '';
    M.move(moveToLoc);
    var bounds = M.getMap().getBounds();
    console.log(JSON.stringify(bounds, null, 2))
    // post rect to ... 
  });

  ;

  //jj
  // map = map.getMap();
  // map.on('load', function () {
  //  
  //   var draw = new MapboxDraw({
  //     displayControlsDefault: false,
  //     controls: {
  //       polygon: true,
  //       trash: true
  //     }
  //   });
  //  
  //   map.addControl(draw);
  //
  //   map.on('draw.create', updateArea);
  //   map.on('draw.delete', updateArea);
  //   map.on('draw.update', updateArea);
  //
  //   function updateArea(e) {
  //     var data = draw.getAll();
  //     var area = turf.area(data);
  //     var features = data.features;
  //    
  //     localStorage.polygons = JSON.stringify(features );
  //   }
  // });
  // console.log(JSON.parse(localStorage.polygons));
})();


