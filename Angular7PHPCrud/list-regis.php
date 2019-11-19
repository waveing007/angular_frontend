<?php 

require 'connect.php';
error_reporting(E_ERROR);

$registration = [];
$sql = "SELECT * FROM registration";

if($result = mysqli_query($con, $sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $registration[$cr]['id_record']   =   $row['id_record'];
        $registration[$cr]['id_student']   =   $row['id_student'];
        $registration[$cr]['id_subject']   =   $row['id_subject'];
        $registration[$cr]['grade']   =   $row['grade'];
       
        $cr++;
    }
    
    echo json_encode($registration);
}
else
{
    http_response_code(404);
}
?>