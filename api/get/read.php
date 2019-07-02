<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
include_once "../../mysql/DB.php";
include_once "../../mysql/getCountries.php";

$database = new DB();
$db = $database->connect();

$countries = new Countries($db);
$result = $countries->read();

$countries_length = $result->rowCount();
// echo $countries_length;

if ($countries_length > 0) {
    $countries_arr = array();
    $countries_arr['data'] = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($countries_arr['data']);
} else {
    echo json_encode(
        array('message' => 'No Countries')
    );
}
?>