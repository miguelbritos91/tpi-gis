<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
$json=file_get_contents("php://input");
$data=json_decode($json, true);
$wkt =  $data['wkt'];
$capas = $data['capas_activas'];
$arrayResult=[];
for ($i=0; $i < sizeof($capas); $i++) { 
    # code...
    $link= pg_connect("host=localhost user=user password=user dbname=TpiServer");
    $query="SELECT * FROM $capas[$i] WHERE st_intersects(ST_geomfromtext('$wkt',4326),geom) LIMIT 20";
    $result = pg_query($query);
    $elto=[
        "capa"=>$capas[$i],
        "registros"=>pg_fetch_all($result)
    ];
    array_push($arrayResult,$elto);
    $result=[];
}


echo json_encode($arrayResult);

?>