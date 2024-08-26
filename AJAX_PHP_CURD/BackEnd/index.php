<?php
header('Access-Control-Allow-Origin: *');

  $conn = new mysqli("localhost:3306","root","","test");
  if($conn->connect_error){
    die("Feild Connection :-".$conn->connect_error);
  }
  switch($_SERVER['REQUEST_METHOD']){
  //=====SELECT DATA=========//
  case "GET":
    $sql = ("SELECT * FROM `First`");
    $data = $conn->query($sql);
    $i=1;
    foreach($data as $row){
      echo("
        <tr>
          <td>$row[Id]</td>
          <td>$row[Name]</td>
          <td>$row[Email]</td>
          <td>$row[Mobile]</td>
          <td>
            <button type='button' class='btn bg-info me-3' onclick='Delete($row[Id])'>Delete</button>
            <button type='button'  class='btn bg-info' onclick='Update($row[Id])'>Update</button>
          </td>
        </tr>
        ");
    }
  break;
  //==========INSERT DATA =========//
  case "POST":
    $name =   $_POST['Name'];
    $email =  $_POST['Email'];
    $mobile = $_POST['Mobile'];
    
    $sql = ("INSERT INTO `First`(Name,Email,Mobile)VALUES('$name','$email',$mobile)");
    if($conn->query($sql))
      echo("Successfuly Send");
    else
      echo("Error Found");
  break;
  
  //==========DELETE===========//
  case "DELETE":
    echo("OK");

    $id = $_POST['Id'];
    
    $sql = "DELETE FROM `First` WHERE Id = $id";
    $conn->query($sql);
  break;
}
  
?>