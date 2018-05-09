//
//  奈良マップ
//
switch( location.host ){
  case 'naamap.code4nara.org' :
    //  本番サーバではMierune地図を利用
    var $maptile = mierune_std;
    break;
  default :
    //  テストサーバではOSM地図を利用
    var $maptile = osmorg; break;
}
var map = L.map( 'map', {center: [DEF_LAT, DEF_LON], zoom: DEF_ZOOM, zoomControl: true, layers: [ $maptile ]});


//  多目的トイレ表示
/*
var toiletLayer = new L.GeoJSON.AJAX( GEOJSON_TOILET , {
  pointToLayer: function (feature, latlng) {
	  return L.marker(latlng, {icon: IconToilet, opacity: "0.8"});
  },
  onEachFeature: onEachFeatureWC
});
*/

//  禁煙施設
var facilityLayer = new L.GeoJSON.AJAX( GEOJSON_FACILITY , {
  pointToLayer: function (feature, latlng) {
    switch ( feature.properties.業種 ){
      case '飲食店営業' : return L.marker(latlng, {icon: IconRestaurant,  opacity: "0.8"});
      case '宿泊施設'   : return L.marker(latlng, {icon: IconLodging,     opacity: "0.8"});
      case 'サービス業' : return L.marker(latlng, {icon: IconService,     opacity: "0.8"});
      case '福祉施設'   : return L.marker(latlng, {icon: IconWelfare,     opacity: "0.8"});
      case '社会教育施設・文化施設': return L.marker(latlng, {icon: IconCulture,  opacity: "0.8"});
      case '公衆浴場'   : return L.marker(latlng, {icon: IconPublicbath,  opacity: "0.8"});
      case '事務所・会社': return L.marker(latlng, {icon: IconOffice,     opacity: "0.8"});
      case '食品販売店' : return L.marker(latlng, {icon: IconFoods,       opacity: "0.8"});
      case '理容店'     : return L.marker(latlng, {icon: IconBarbershop  ,opacity: "0.8"});
      case '美容店'     : return L.marker(latlng, {icon: IconHairdressers,opacity: "0.8"});
      default : return L.marker(latlng, {icon: IconDefault, opacity: "0.8"});
	  }
  },
  onEachFeature: onEachFeaturePOI
});

//  禁煙薬局
var pharmacyLayer = new L.GeoJSON.AJAX( GEOJSON_PHARMACY , {
  pointToLayer: function (feature, latlng) {
	  return L.marker(latlng, {icon: IconPharmacy, opacity: "0.8"});
  },
  onEachFeature: onEachFeaturePOI
});

var overlayMaps = {
  "禁煙施設"       : facilityLayer,
  "禁煙薬局"       : pharmacyLayer,
//  "多目的トイレ"   : toiletLayer,
//  "ルート案内表示" : routeLayer,
};

if( DEFALT_DATA == "FACILITY" ) {
  map.addLayer( facilityLayer );
}
if( DEFALT_DATA == "PHARMACY" ) {
  map.addLayer( pharmacyLayer );
}
//map.addLayer( toiletLayer );

L.control.layers( baseMaps, overlayMaps ).addTo(map);

//  GPS位置情報がとれれば中心になるように地図を移動。左下に位置を表示
var infowindow=L.control();
var CurrentMaker=L.marker();

infowindow.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this._div.innerHTML='<div id="Status">GPS Waiting</div>';
    return this._div;
};

/*
// method that we will use to update the control based on feature properties passed
infowindow.update = function (props) { this._div.innerHTML='<div id="Status"></div>';};
infowindow.setPosition('bottomleft');
infowindow.addTo(map);

//  ルート検索
function SearchWheelChairRoute( lon2, lat2 ) {
  map.removeLayer( routeLayer );
  if( (lon2 == 999 ) ||(lat2 == 999) ){ return; }
  var gpx = 'https://route.zukatech.com/gpxroute.php?lon1='+curlon+'&lat1='+curlat+'&lon2='+lon2+'&lat2='+lat2 ;
  var wheelLayer = new L.GPX(gpx, {async: true}).on('loaded', function(e) {
	  map.fitBounds(e.target.getBounds());
  });

  routeLayer = L.layerGroup([wheelLayer] );
  routeLayer.addTo(map);
}

function SearchWheelChairRouteDemo( lon2, lat2 ) {
    map.removeLayer( routeLayer );

    var gpx = 'https://route.zukatech.com/unimap/gpxroute.php?lon1='+DEF_CUR_LON+'&lat1='+DEF_CUR_LAT+'&lon2='+lon2+'&lat2='+lat2 ;
    var wheelLayer = new L.GPX(gpx, {async: true}).on('loaded', function(e) {
	map.fitBounds(e.target.getBounds());
    });
    routeLayer = L.layerGroup([wheelLayer] );
    routeLayer.addTo(map);
}

////  get GPS Location
function onLocationFound(e) {
    var undefined;
    var alt = 0, spd = 0 , dir = 0 , tim = 0 ;
    var acc = e.accuracy / 2;
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    curlon=e.latlng.lng;
    curlat=e.latlng.lat;

    if( e.altitude !== undefined ){ alt=e.altitude; }
    if( e.speed    !== undefined ){ spd=e.speed;    }
    if( e.heading  !== undefined ){ dir=e.hedding;  }  
    if( e.timestamp !== undefined){ tim=e.timestamp/1000 - 1356040000;  }
    
    var str = '<DIV>'
    str += '<form name="MOVE"><input type="button" name="CP" value="現在地を表示" onClick="movetoCurrentLocation(';
    str += lat + ", " + lng +')">';
    str += '<input type="button" name="RT" value="コースを表示" onClick="movetoRouteLocation()"></form>';
    str += "<p>(" + lng.toFixed(3) + "," + lat.toFixed(3) + ")</br>";
    str += "ACC: " + acc.toFixed(0);
    if( spd != 0 ){
	str += " S: " + spd.toFixed(0) + " m/sec D:" + dir.toFixed(0) + "</p>"
    }else{
	str += " S: 0 m/sec</p>";
    }
    str += '</DIV>'

    CurrentMaker.setLatLng( e.latlng ).addTo(map);
//    Circle2.setLatLng( e.latlng ).addTo(map);

    document.getElementById('Status').innerHTML = str;
    //movetoLocation( latlng ) {
}

////  move to GPS Location
function movetoCurrentLocation( lat, lng ) {
    var zoomLevel = map.getZoom();
    var latlng = L.latLng( lat, lng);
    map.setView( latlng , zoomLevel );
}

////  move to GPS Location
function movetoRouteLocation() {
  map.fitBounds(courseRouteLayer.getBounds(), {
	  padding: [50, 50]
  });
}

// Watch GPS Location 
map.on( 'locationfound', onLocationFound);
map.locate({watch: true});
*/

/*
map.on(
  'zoomend', function () {
    switch( map.getZoom() ){
      case 19 :
      case 18 :
      case 17 :
      case 16 :
        map.addLayer(passLayer);
        map.addLayer(courseLayer);
        map.addLayer(toiletLayer);
        break;
      case 15:
      case 14:
        map.removeLayer(passLayer);
        map.removeLayer(courseLayer);
        map.addLayer(toiletLayer);
        break;
      case 13:
      default:
        map.removeLayer(passLayer);
        map.removeLayer(courseLayer);
        map.removeLayer(toiletLayer);
        break;
    }
  }
);

*/


