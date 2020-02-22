var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
var numbers = [];
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var maxValue = document.getElementById("myRange").max
var minValue = document.getElementById("myRange").min

//Moving slider redraws image. There will be a second button to reset the randomization

function generatePoints(){
	for (i =minValue; i < maxValue; i++){
		var x = Math.floor(Math.random()*120)+20;
		var y = Math.floor(Math.random()*120)+20;
		numbers.push(x);
		numbers.push(y);
	}
}


function draw(){
	generatePoints();
	//Hacky way of reseting the position
	document.getElementById("myRange").value = 50;
	if (canvas.getContext){
		context.beginPath();
		context.rect(20, 20,100, 100)
		context.stroke();
		context.closePath();

		context.beginPath();
		context.arc(70, 70, 50, 0, 2 * Math.PI);
		context.stroke();
		context.closePath();
	}

	
	for (i = 0; i < document.getElementById("myRange").value; i++){
		context.beginPath();
		context.rect(numbers[i], numbers[i+1], 1, 1);
		//context.rect(Math.floor(Math.random()*120)+20, Math.floor(Math.random()*120)+20, 1,1);
		context.stroke();
		context.closePath();
		
	}

	//document.getElementById("special").innerHTML = document.getElementById("myRange").value;
	//document.getElementById("special").innerHTML = this.value;
}


function redraw(sliderPos){
	context.clearRect(0,0, canvas.width, canvas.height);
	//Do not have to redraw circle and square!

	//square
	context.beginPath();
	context.rect(20, 20,100, 100)
	context.stroke();
	context.closePath();

	//circle
	context.beginPath();
	context.arc(70, 70, 50, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();

	context.beginPath();
	for (i =0; i <sliderPos; i++){
		context.beginPath();
		context.rect(numbers[i], numbers[i+1], 1, 1);
		context.stroke();
		context.closePath();
	}
}


slider.oninput = function(){
	output.innerHTML = this.value;
	redraw(output.innerHTML);
}


