<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
// $json=file_get_contents("php://input");
// $data=json_decode($json, true);
// $wkt =  $data['wkt'];
// $capas = $data['capas_activas'];

// header('Content-type: text/html; charset=utf-8;');
$wkt =  $_POST['wkt'];
$capas = $_POST['capas_activas'];


$link= pg_connect("host=localhost user=user password=user dbname=TpiServer");

$query=<<<EOD
SELECT * FROM $capas WHERE 
st_intersects(
ST_geomfromtext('$wkt',4326),
geom
)
EOD;

$result = pg_query($query);

$arrayResult=pg_fetch_all($result);
// while ($row = pg_fetch_row($result)) { 
//         $arrayResult[] = $row;
// }

// $arrayResult = pg_fetch_array($result);

echo json_encode($capas[0]);

?>