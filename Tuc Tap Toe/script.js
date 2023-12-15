
const main = document.querySelector("main");
const box = [];
//=========================//
for(var i=1; i<=9; i++){
	let el = document.createElement("div");
	el.innerHTML = `<input type="radio" id="inpt${i}" value=" ">
				<label for="inpt${i}" class="label" ></label>`;
	box.push(el)
}
for(let c of box){
	main.append(c);
}
const play = document.querySelectorAll("span");
const inputBox = document.querySelectorAll("input[type='radio']");
var flag=0;
for( let c of box){
	c.children[0].addEventListener("change", () => {
		if(flag==0){
			Check(c,'x');
			play[0].style.border="none";
	   	play[1].style.border="2px solid red";
		   flag++;
		}
		else{
			Check(c,'o');
			play[0].style.border="none";
	   	play[1].style.border="2px solid red";
		   flag=0;
		}
	   //var qwe = setTimeout(Bot,1000);
	});
}
function Bot(){
	const inpt = document.querySelectorAll("input");
	var count =0,index,i;
	if(flag==1)
		i=4;
	else{
		
	}
	//for(i=0; i<9 && inpt[i].value!= " "; i++);
	if(inpt[i].value == " "){
	 	index = i;
		box[index].children[0].checked=true;
		Check(box[index],'o');
		play[1].style.border="none";
		play[0].style.border="2px solid red";
	}
}
function Check(c,plear){
	var countX=document.getElementById("X_Num").innerHTML,countO=document.getElementById("O_Num").innerHTML;
	c.children[0].value = plear;
	c.children[1].innerHTML=plear;
	if(plear == 'x')
		Player_X_Win('x',countX);
	else
		Player_X_Win('o',countO);
}
const inpt = document.querySelectorAll("input");
const lbl = document.querySelectorAll(".label");
//==================== FOR CHECK [0] PLEAR IS WINNER========================/
//============/
function Player_X_Win(ox,count){
	//console.log(inpt[0].value);
	var temp = count;
	 //------------ROW
	if(inpt[0].value ==ox && inpt[1].value ==ox && inpt[2].value ==ox){
		console.log("The X Is Winner..R1");
		lbl[0].style.color=lbl[1].style.color=lbl[2].style.color="red";
		count++;
	}
	else if(inpt[3].value ==ox && inpt[4].value ==ox && inpt[5].value ==ox){
		console.log("The X Is Winner..R2");
		lbl[3].style.color=lbl[4].style.color=lbl[5].style.color="red";
		count++;
	}
	else if(inpt[6].value ==ox && inpt[7].value ==ox && inpt[8].value ==ox){
		console.log("The X Is Winner..R3");
		lbl[6].style.color=lbl[7].style.color=lbl[8].style.color="red";
		count++;
	}
		
	//------------COLUMN	
	else if(inpt[0].value ==ox && inpt[3].value ==ox && inpt[6].value ==ox){
		console.log("The X Is Winner..C1");
		lbl[0].style.color=lbl[3].style.color=lbl[6].style.color="red";
		count++;
	}
	else if(inpt[1].value ==ox && inpt[4].value ==ox && inpt[7].value ==ox){
		console.log("The X Is Winner..C2");
		lbl[1].style.color=lbl[4].style.color=lbl[7].style.color="red";
		count++;
	}
	else if(inpt[2].value ==ox && inpt[5].value ==ox && inpt[8].value ==ox){
		console.log("The X Is Winner..C3");
		count++;
		lbl[2].style.color=lbl[5].style.color=lbl[8].style.color="red";
	}
	//-----------ROW COLUMN
	else if(inpt[0].value ==ox && inpt[4].value ==ox && inpt[8].value ==ox){
		console.log("The X Is Winner..RC1");
		count++;
		lbl[0].style.color=lbl[4].style.color=lbl[8].style.color="red";
	}
	else if(inpt[2].value ==ox && inpt[4].value ==ox && inpt[6].value ==ox){
		console.log("The X Is Winner..RC2");
		count++;
		lbl[2].style.color=lbl[4].style.color=lbl[6].style.color="red";
	}
	if(temp != count){
		if(ox=='x'){
			document.getElementById("X_Num").innerHTML=""+count;
			alert("PLEARS [ X ] IS WINNER...");
			var call = setTimeout(Reset,1000);
		}else{
			document.getElementById("O_Num").innerHTML=""+count;
			alert("PLEARS [ O ] IS WINNER...");
			var call = setTimeout(Reset,1000);
		}
	}else{
		var flag=0;
		for(var i=0; i<9; i++)
			if(inpt[i].value!=" ")
				flag++;
		console.log(flag);
		if(flag==9){
			alert(" CAN NOT WIN! ANY PLEAR...");
			for(var i=0; i<9; i++)
	 				lbl[i].style.color="red";
			var call = setTimeout(Reset,1000);
	 	}
	}
}
	//==================== FOR CHECK [0] PLEAR IS WINNER========================//

function Reset(){
	document.getElementById("myForm").reset()
	flag=0;
	for(let b of box){
		b.children[0].value = " ";
		b.children[1].innerHTML=`\0`;
	}
	for(var i=0; i<9; i++)
		lbl[i].style.color="#ddd";
}

function ScoreReset(){
	Reset();
	countO=0;
	count=0;
	document.getElementById("O_Num").innerHTML=""+countO;
	document.getElementById("X_Num").innerHTML=""+count;
}
function Random(min,max){
	max++;
	var randomNum = (Math.random()*(max-min))+min;
	randomNum = Math.floor(randomNum); 	
	console.log(randomNum);	
	return randomNum;
}