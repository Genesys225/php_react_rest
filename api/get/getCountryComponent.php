<?php
header("Access-Control-Allow-Origin: *");
// header("Content-type: application/json");
include_once "../../mysql/DB.php";
include_once "../../classes/Country.php";

$curl = curl_init();

$database = new DB();
$db = $database->connect();

$param = $_GET['Name'];

$country_db = new Country($db);
$country = $country_db->getByName($param);

$country_length = $country->rowCount();

if ($country_length > 0) {
    $country_arr = $country->fetch(PDO::FETCH_ASSOC);

    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => 'http://localhost:3000/country',
        CURLOPT_POST => 1,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => json_encode(array('data' => $country_arr)),
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
            // 'Content-Length: ' . strlen($country_arr)
        )
    ]);
    $node_output = curl_exec($curl);
    print_r($node_output);
    curl_close($curl);
} else {
    echo json_encode(
        array('message' => "No Country with name: $param")
    );
}
