<?php
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://localhost:3000/'
]);

$result = curl_exec($curl);
list($html, $initialProps) = explode("!!, ", $result);
// print_r($initialProps);
curl_close($curl);
error_reporting(E_ALL);
ini_set('display_errors', 1);

$user = (object) [
    'name' => 'Jane Doe',
    'email' => 'janedoe@gmail.com',
    'logged' => true
];

?>
<!doctype html>
<html lang="en">
<head>
    <title>React PHP starter Kit</title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="/public/bundle.js" defer></script>
</head>
<script type="text/javascript">
    var STATIC_URL = 'http://localhost/my-app';
    var myApp = {
        user: <?php echo json_encode($user); ?> ,
        logged : <?php echo $user-> logged; ?>
    };
    window.__INITIAL_DATA__ = <?php echo $initialProps; ?>;
</script>

<body>
    <div id="app"><?php print_r($html); ?></div>
</body>

</html>