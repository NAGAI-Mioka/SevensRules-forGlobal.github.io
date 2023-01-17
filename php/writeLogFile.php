<?php
    $raw = file_get_contents("php://input");
    $jsonFile = file_get_contents("accessLog/test.json");
    $new_records = json_decode($raw, true);
    $records = json_decode($jsonFile, true);

    $records[] = $new_records;

    $new_jsonFile = json_encode($records);
    echo "$records";
    //$records[] = 
    file_put_contents("accessLog/test.json", $new_jsonFile);


    $data = json_decode($raw);
    $res = $data;
    echo json_encode($res);
?>
