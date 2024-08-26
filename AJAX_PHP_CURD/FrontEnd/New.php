<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fetch Data</title>
</head>
<body>
  <form  id="myForm">
    <label for="Name">Enter Name</label>
    <input type="text" name="Name" id="Name">
    <br/>
    <label for="Email">Enter Email</label>
    <input type="text" name="Email" id="Email">
    <br/>
    <label for="Name">Enter Mobile</label>
    <input type="text" name="Mobile" id="Mobile">
    <br/>
    <input type="button" value="Submit"/>
  </form>
</body>
<script>
var sendData = new FormData();
function Insert(){
  sendData.append(document.getElementById("myForm"));
  Server("Insert");
}
Server("Select");
function Server(op) {
  var url = "http://localhost:8080/Request_Link_PHP/Select.php";
  sendData.append('OperationName',op);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          Print(xhr.responseText); 
        }
    };
    xhr.open("POST",url, true);
    xhr.send(sendData);
}
function Print(resData){
  document.write(resData);
}
</script>
</html>