<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Show Table</title>
  <link rel="stylesheet" href="../FrontEnd/bootstrap.min.css">
  <style>
    .New{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(15px);
      display:none;
      align-items: center;
      justify-content: center;
    }
    .New > form {
      background: #ffffff99;
      border: 1px solid var(--bs-info);
    }
  </style>
</head>
<body>
  <table class="table bg-info text-dark text-center p-4">
    <thead>
      <tr>
        <th colspan="100%" >
          <button class="btn mt-3 ms-3 ps-4 pe-4 bg-dark text-light position-absolute start-0 top-0" onclick="OpenNewForm()">New</button>
          <h1>TEST DATA</h1>
        </th>
      </tr>

      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>#Action</th>
      </tr>
    </thead>
    <tbody class="bg-dark text-light" id="tBody">
      <!-- Data Face To MYSQL Get -->
    </tbody>
  </table>
  <div class="New">
    <form  name="myForm" id="myForm" class=" container w-50 p-3 rounded" onclick="Border()">
      <button type="button" class="btn ps-4 pe-4 bg-dark text-light position-absolute start-0 top-0" onclick="CloseNewForm()">CLOSE</button>
      <h1>New Data Insert</h1>
      <label for="Name">Enter Name</label>
      <input type="text" name="Name" id="Name" class="form-control">
      <br/>
      <label for="Email">Enter Email</label>
      <input type="text" name="Email" id="Email" class="form-control">
      <br/>
      <label for="Name">Enter Mobile</label>
      <input type="text" name="Mobile" id="Mobile" class="form-control">
      <br/>
      <input type="button" value="Submit" class="form-control bg-info" onclick="New()"/>
    </form>
  </div>
</body>
<script>
const url = "http://localhost:8080/AJAX_PHP_CURD/BackEnd/index.php";
var xhr = new XMLHttpRequest();
Get();
function New(){
  const form = new FormData();
  form.append("Name",myForm.Name.value);
  form.append("Email",myForm.Email.value);
  form.append("Mobile",myForm.Mobile.value);
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState==4 && xhr.status==200){
        document.getElementById("myForm").reset();
        newForm.style.display ="none";
        Get();
      }
  };
  xhr.open("POST",url, true);
  xhr.send(form);
}
function Get() {
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById('tBody').innerHTML= xhr.responseText;
      
        }
    };
    xhr.open("GET",url, true);
    xhr.send();
}
const newForm = document.querySelector(".New");
function CloseNewForm(){
  newForm.style.display ="none";
}
function OpenNewForm(){
  newForm.style.display ="flex";
}
function Update(id){
  alert(id);
}

function Delete(id){

  const form = new FormData();
  form.append("Id",id);

  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      console.log(form);
      Get();
    }

  };
  xhr.open("DELETE",url, true);
  xhr.send(form);
}
</script>
</html>