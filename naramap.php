<!DOCTYPE html>
<html lang="ja">
      <head>
      <title>NaraMap by Code for Nara</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./dist/leaflet.css" />
      <link rel="stylesheet" href="./css/map.css" />
      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      
      <!--Leaflet 読み込み-->
<!--      <script type="text/javascript" src="./dist/leaflet.js"></script> -->
      <script type="text/javascript" src="./dist/leaflet-src.js"></script>
      <link href="./dist/leaflet.css" rel="stylesheet"/>
      <script type="text/javascript" src="./dist/leaflet.ajax.min.js"></script>
      <script type="text/javascript" src="./dist/gpx.js"></script>
<!--
      <script type="text/javascript" src="./dist/leaflet-ant-path.js"></script>
      <script type="text/javascript" src="./dist/leaflet-polygon.fillPattern.js"></script>
-->
</head>
<body>
  <div id="map"></div>

<?php

if( isset( $_SERVER['HTTP_HOST']  ) ){
  $area = $_GET['area'];
  $HTTP_HOST = $_SERVER['HTTP_HOST'] ;
}else{
  $area = "none";
  $HTTP_HOST = "none";
}

echo '  <!-- server: '.$HTTP_HOST.' area: '.$area.' -->'."\n";

if( strcmp( $area, "none") ){
  echo "  \n";
  echo '  <script type="text/javascript" src="js/param_'.$area.'.js"></script>';
  echo "  \n";
}

print <<< EOF
  <script type="text/javascript" src="js/style.js"></script>
  <script type="text/javascript" src="js/icons.js"></script>
  <script type="text/javascript" src="js/popup.js"></script>
  <script type="text/javascript" src="js/naramap.js"></script>
EOF;
?>
</body>
</html>
