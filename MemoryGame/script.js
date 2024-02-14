
	const CardSelect = document.querySelector(".CardSelect");
	const SizeOfCardSelect = document.querySelector(".SizeOfCardSelect"); 
	const emoji = ["😍","💐","🍎","❤️","🐱","?"];
	const size = ["2x3","3x4","4x5"];
	
	for(var i=0; i<6; i++){
		let el = document.createElement("div");
		el.classList.add("Card");
		el.innerHTML=`<input type="radio" id="Card${i}" name="card" value="${i}"><label for="Card${i}" class="CardLable">${emoji[i]}</label>`;
		CardSelect.append(el);
	}
	for(var i=0; i<3; i++){
		let el=document.createElement("div");
		el.classList.add("SizeCard");
		el.innerHTML = `<input type="radio" id="Size${i}" value="${i}" name="size_name"><label for="Size${i}">${size[i]}</label>`;
		SizeOfCardSelect.append(el);
	}
	document.querySelector(".CardLable[for='Card5']").classList.add("AllOption");;
	document.querySelector("#Card0").checked = true;
	document.querySelector("#Size0").checked = true;
	
// 	Valum On Off Buttom 
	
const vlmBtn = document.querySelector(".volumeBtn");
var bull = false;
VolumeOn();
vlmBtn.onclick = function(){
    VolumeOn();
};
function VolumeOn(){
  const inptId = document.querySelectorAll("input[name='vlm']");
  if(bull){
    inptId[0].id = "";
    inptId[1].id = "vlm";
    vlmBtn.children[0].classList.remove("bxs-volume-mute");
    bull = false;
  }else{
    inptId[1].id = "";
    inptId[0].id = "vlm";
    vlmBtn.children[0].classList.add("bxs-volume-mute");
    bull = true;
  }
}
const audio = new Audio('./click.mp3');
function Sound(){
  audio.play();
}