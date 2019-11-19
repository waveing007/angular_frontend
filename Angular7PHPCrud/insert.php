<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);


    // Sanitize.
    $sId   = mysqli_real_escape_string($con,$request->sId);
    $fName = mysqli_real_escape_string($con, trim($request->fName));
    $lName = mysqli_real_escape_string($con, trim($request->lName));
    $email = mysqli_real_escape_string($con, $request->email);
    $address = mysqli_real_escape_string($con, trim($request->address));

    // Store.
    $sql = "INSERT INTO students ( sId,fName, lName, email, address)
    VALUES ('{$sId}','{$fName}','{$lName}','{$email}','{$address}')";

    if(mysqli_query($con, $sql))
    {
        http_response_code(201);
    }
    else
    {
        http_response_code(422);
    }   
}

?>