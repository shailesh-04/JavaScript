const gameBox = document.querySelector(".Game_Box");
var audio;
var audioClick;
var audioWin;
const root = document.querySelector(':root');
var emoji;
const box = [];
let noOfBox;
let score =0;

const info = location.search.split("&");
var vlm =info[1].split("=")[1]; 
if(vlm==1){
  console.log("True");
  audio = new Audio('./click.mp3');
  audioClick = new Audio('./clickKey.mp3');
  audioWin = new Audio('./WinSound.mp3');
}else{
  console.log("false");
  audio = new Audio('./Silence.mp3');
  audioClick = new Audio('./Silence.mp3');
  audioWin = new Audio('./Silence.mp3');
}

switch(parseInt((info[2].split("="))[1])){
	case 0: emoji = ["😁","😘","😈","🎃","😡","😎","🥰","🤯","😂","😛"]; break;
	case 1: emoji = ["💐","🌹","🥀","🌷","🌺","🌸","🏵️","🌻","🌼","💮"]; break;
	case 2: emoji = ["🍓","🍒","🍎","🍉","🍑","🍊","🥭","🍍","🍌","🍋"]; break;
	case 3: emoji = ["❤️","💘","💝","💖","💗","💓","💞","💕","💔","❣️"]; break;
	case 4: emoji = ["🐵","🦁","🐯","🐱","🐶","🐺","🐻","🐨","🐼","🐹"]; break;
	case 5: emoji = ["🌼","😘","💘","🐶","🌺","😎","🌹","🍒","💔","🐹"]; break;
}
switch(parseInt((info[3].split("="))[1])){
	case 0: noOfBox = 6;
		root.style.setProperty('--no','3');break;
	case 1: noOfBox = 12; 
		root.style.setProperty('--no','4');
		root.style.setProperty('--row','8rem');break;
	case 2: noOfBox = 20; 
		root.style.setProperty('--no','5');
		root.style.setProperty('--row','7rem');break;
}

for(let i=0; i<noOfBox; i++){
	let el = document.createElement("div");
	el.classList.add("card");	
	el.innerHTML=emoji[i%(noOfBox/2)];
	box.push(el);
}
Reset();
function Reset(){
	let sa = document.querySelectorAll('.MatchBox');
	audioClick.play();
	for(var i=0; i<sa.length; i++){
 		sa[i].classList.remove('MatchBox');
	}
	document.querySelector('.bx-reset').style.transform="rotate(0deg)";
	box.sort(()=>{
		return Math.random() - 0.5;
	})
	
	if((parseInt((info[0].split("="))[1]))==0){
		for(let c of box)
			c.classList.add('boxOpen');
		setTimeout(()=>{
			for(let c of box)
				c.classList.remove('boxOpen');
		},1000)
	}
	for(let c of box){
		c.onclick = function(){
			audio.play();
			this.classList.add('boxOpen');
			let card = document.querySelectorAll('.boxOpen');
			setTimeout(() => {
				if(card.length > 1){
					if( card[0].innerHTML==card[1].innerHTML){
						card[0].classList.add('MatchBox');
						card[1].classList.add('MatchBox');
					
						card[0].classList.remove('boxOpen');
						card[1].classList.remove('boxOpen');
					
						if(document.querySelectorAll('.MatchBox').length==noOfBox){
							audioWin.play();
							score++;
							document.querySelector('.score').innerHTML=score;
							Reset();
						}
					}else{
						card[0].classList.remove('boxOpen');
						card[1].classList.remove('boxOpen');
					}
				}
			},500)
		}
		gameBox.append(c);
	}
}
function GotoHome(){
	audioClick.play();
	document.location.href='index.html';
}
