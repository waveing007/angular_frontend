<?php 

    require 'connect.php';

    $id = $_GET['id'];

    //get by id
$sql = "SELECT * FROM students WHERE sId= '{$id}' LIMIT 1";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

//print_r($row);

echo $json = json_encode($row);
//echo json_encode(['data'=> $json]);

exit;