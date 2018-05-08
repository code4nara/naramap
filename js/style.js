////////////////////////////////////////////////////////////////////////////
//  表示スタイルの定義
//      タイル地図情報、LineString, Polygon表示形状の定義
//      Wirtten by Y.ISHIZUKA(Code for Nara)
////////////////////////////////////////////////////////////////////////////
//  背景地図：初期表示の中心の緯度・経度
DEF_LAT=34.6850; 
DEF_LON=135.8300; 

//  背景地図：初期表示のズームレベル（縮尺）
DEF_ZOOM=15;

////
//  背景地図情報
////
var osmorg = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});
var osmjp = L.tileLayer('https://tile.openstreetmap.jp/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});
var GSIstd = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
    minZoom: 2,
    maxZoom: 18,
    attribution: "地理院地図(標準)"
});
var GSIpale = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
    minZoom: 2,
    maxZoom: 18,
    attribution: "地理院地図(淡色)"
});
var GSIhillshademap =L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png", {
    minZoom: 2,
    maxNativeZoom: 16,
    maxZoom: 18,
    attribution: "地理院地図(傾斜)"
});
var GSIort =L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
    minZoom: 14,
    maxZoom: 18,
    attribution: "地理院地図(オルソ)"
});

////  MIERUNE tile map
var apikey = "227f7c3288ea7ee88fe0528a1658d975e44cea53f08d2a23d135311d705aeb90293b82f54738cc96dead767074c00a6c5e75095fd0bf518f4c642078ad99fbd9abe079c23b"

// MIERUNE地図mono
var style = "mierune_mono";
var mierune_url = "https://tile.mierune.co.jp/" + style + "/{z}/{x}/{y}.png" ;
var mierune_mono = new L.tileLayer(mierune_url, {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

// MIERUNE地図color
var style = "mierune";
var mierune_url = "https://tile.mierune.co.jp/" + style + "/{z}/{x}/{y}.png" ;
var mierune_color = new L.tileLayer(mierune_url, {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

// MIERUNE地図normal
var style = "normal";
var mierune_url = "https://tile.cdn.mierune.co.jp/styles/" + style + "/{z}/{x}/{y}.png" + "?key=" + apikey;
//var mierune_url = "https://tile.mierune.co.jp/" + style + "/{z}/{x}/{y}.png"  + "?key=" + apikey;
var mierune_std = new L.tileLayer(mierune_url, {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

//  Base TileMap List
var baseMaps = {
    "OpenStreetMap": osmorg,
    "MIERUNE標準" 　: mierune_std,
//    "日本版ＯＳＭ" : osmjp,
    "地理院標準"   : GSIstd,
//    "地理院淡色地図" : GSIpale,
//    "地理院傾斜地図" : GSIhillshademap,
//    "地理院航空写真" : GSIort,
    "MIERUNEモノ" 　: mierune_mono,
//    "MIERUNEカラー" : mierune_color,
};


