var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
var numbers = [];

function generatePoints(){
	

}


function draw(){
	var canvas = document.getElementById('canvas');
	if (canvas.getContext){
		var context = canvas.getContext('2d');
		context.beginPath();
		context.rect(20, 20,100, 100)
		context.stroke();
		context.closePath();

		context.beginPath();
		context.arc(70, 70, 50, 0, 2 * Math.PI);
		context.stroke();
		context.closePath();

		context.beginPath();
		context.rect(30, 30, 1, 1);
		context.stroke();
		context.closePath();

	}
}

function redrawTest(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.clearRect(20, 20, 100, 100);

	context.beginPath();
	context.rect(20, 20,100, 100)
	context.stroke();
	context.closePath();

	context.beginPath();
	context.arc(70, 70, 50, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();

	context.beginPath();
	context.rect(50,50,1,1);
	context.stroke();
	context.closePath();

}


function remove(){
	document.getElementById("special").innerHTML = "hello";
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.beginPath();
	context.rect(50,50,1,1);
	context.stroke();
	context.closePath();

	redrawTest();


}

slider.oninput = function(){
	output.innerHTML = this.value;
}