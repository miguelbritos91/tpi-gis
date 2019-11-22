<?php
header('Content-type: text/html; charset=utf-8;');
$wkt =  $_GET['wkt'];


$link= pg_connect("host=192.168.0.5 user=user password=user dbname=TpiServer");

$query=<<<EOD
SELECT * FROM red_vial WHERE 
st_intersects(
ST_geomfromtext('$wkt',4326),
geom
)
EOD;

$result = pg_query($query);

$arrayResult = pg_fetch_array($result);
echo json_encode($arrayResult);

?>