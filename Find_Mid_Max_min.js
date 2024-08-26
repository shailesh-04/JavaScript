
function Max_Mid_min(){   
   var a=Number(document.getElementById("Inp_Num1").value);
   var b=Number(document.getElementById("Inp_Num2").value);
   var c=Number(document.getElementById("Inp_Num3").value);
   
   //Middle
   if(a>b&&a<c||a<b&&a>c)
	{
		document.getElementById("ans1").innerHTML="Middle :-"+a;
	}
	else if(b>a&&b<c||b<a&&b>c)
	{
		document.getElementById("ans1").innerHTML="Middle :-"+b;
	}
	else
	{
		document.getElementById("ans1").innerHTML="Middle :-"+c;
	}
	
	//MAximum
	if(a>b&&a>c)
	{
	   document.getElementById("ans2").innerHTML="Maximum :-"+a;
	}
	else if(b>a&&b>c)
	{
	   document.getElementById("ans2").innerHTML="Maximum :-"+b;
	}
	else
	{
      document.getElementById("ans2").innerHTML="Maximum :-"+c;
	}          
	//Minimum
   if(a<c&&a<b)
	{     
		  document.getElementById("ans3").innerHTML="Minimum :-"+a;
 	}
 	else if(b<a&&b<c)
 	{
 	     document.getElementById("ans3").innerHTML="Minimum :-"+b;
	}
 	else
 	{
 		  document.getElementById("ans3").innerHTML="Minimum :-"+c;
 	}
}