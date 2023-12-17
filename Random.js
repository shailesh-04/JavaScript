function Random(min,max){
	max++;
	var randomNum = (Math.random()*(max-min))+min;
	randomNum = Math.floor(randomNum); 	
	console.log(randomNum);	
	return randomNum;
}