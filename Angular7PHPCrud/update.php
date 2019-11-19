<?php
    require 'connect.php';

    //get the posted data.
    $postdata = file_get_contents("php://input");

    //print_r($postdata);

    if(isset($postdata) && !empty($postdata))
    {
        // Extract the data
        $request = json_decode($postdata);

        //sanitize.
        $id = mysqli_real_escape_string($con, (int)$_GET['id']);
        $fName = mysqli_real_escape_string($con, trim($request->fName));
        $lName = mysqli_real_escape_string($con, trim($request->lName));
        $fName = mysqli_real_escape_string($con, $request->email));

        //update.
    $sql = " UPDATE students SET fName='$fName', lName='$lName', email='$email' WHERE sId ='{$id}' LIMIT 1";


    if(mysqli_query($con, $sql))
        {
            http_response_code(204);
        }
    else
        {
            return http_response_code(422);
        }
    }
