<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);


    // Sanitize.
    $id_record   = mysqli_real_escape_string($con,$request->$id_record);
    $id_student = mysqli_real_escape_string($con, trim($request->id_student));
    $id_subject = mysqli_real_escape_string($con, trim($request->id_subject));
    $grade = mysqli_real_escape_string($con, $request->grade);

    // Store.
    $sql = "INSERT INTO registration ( id_record,id_student,id_subject, grade)
    VALUES ('{$id_record}','{$id_student}','{$id_subject}','{$grade}')";

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