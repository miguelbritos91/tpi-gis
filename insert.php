<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
$json=file_get_contents("php://input");
$data=json_decode($json, true);
$wkt =  $data['wkt'];
$name = $data['name'];
$description= $data['description'];
$type=$data['type'];



switch ($type) {
    case 'point':
        # code...
        $query="INSERT INTO user_point_layer ( name, description, geom ) VALUES ( '$name', '$description', ST_GeomFromText('$wkt', 4326))";
        break;
    case 'line':
        $query="INSERT INTO user_linestring_layer ( name, description, geom ) VALUES ( '$name', '$description', ST_GeomFromText('$wkt', 4326))";
        break;
    case 'polygon':
        $query="INSERT INTO user_polygon_layer ( name, description, geom ) VALUES ( '$name', '$description', ST_GeomFromText('$wkt', 4326))";
        break;
}
$link= pg_connect("host=localhost user=user password=user dbname=TpiServer");
$result=pg_query($link, $query) or die('ERROR AL INSERTAR DATOS: ' . pg_last_error());

if(($row=pg_affected_rows($result))==0){
    $resp=[
        "error"=>true,
        "message"=>'<strong>Error!</strong> '.$result
    ];
}else{
    $resp=[
        "error"=>false,
        "message"=>'<strong>Exito!</strong> Se ha registrado correcamente la geometria'
    ];
}

echo json_encode($resp);
