var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var numbers = [];
var stopFun = false;
var Ninner = 0;
var Ntotal = 0;

function generatePoints(){
	for (i = 0; i < 2000000; i++){
	var x = Math.floor((Math.random()*200)+0);
	var y = Math.floor((Math.random()*200)+0);
	numbers.push(x);
	numbers.push(y);
	}
}


function draw(){

	//context.beginPath();
	//context.fillStyle = "blue"
	//context.fillRect(0,0, canvas.width, canvas.height)


	context.beginPath();
	context.rect(0, 0, 200, 200)
	context.stroke();
	context.closePath();

	context.beginPath();
	context.arc(100, 100, 100, 0, 2 * Math.PI);
	context.stroke();
	context.closePath();



	//document.getElementById("special").innerHTML = document.getElementById("myRange").value;
	//document.getElementById("special").innerHTML = this.value;
}

async function startAnimation(){
	stopFun = false;
	for (i = 0; i < 2000000; i++){
		//var x = Math.floor(Math.random()*120)+20;
		//var y = Math.floor(Math.random()*120)+20;
		if (stopFun == true){
			return;
		}

		//rest of animation executes here
		else{

			Ntotal += 1;


			distance = Math.sqrt(Math.pow(numbers[i]-100, 2) + Math.pow(numbers[i+1]-100, 2))

			if (distance <= 100){
				//inside or on circle
				context.beginPath();
				context.strokeStyle = "red";
				context.rect(numbers[i], numbers[i+1], 1, 1);
				context.stroke();
				context.closePath();
				Ninner += 1;
			}

			else if (distance > 100){
				context.beginPath();
				context.strokeStyle = "blue";
				context.rect(numbers[i], numbers[i+1], 1, 1);
				context.stroke();
				context.closePath();
			}

			est = 4*(Ninner/Ntotal);
			document.getElementById("estimate").innerHTML = est;
			document.getElementById("numPoints").innerHTML = Ntotal;

			await sleep(0.1);
		}

	}

	alert("Animation has finished!");

}


function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

function clearCanvas(){
	stopFun = true;
	context.strokeStyle = "black";
	context.clearRect(0,0, canvas.width, canvas.height);
	Ninner = 0;
	Ntotal = 0;
	draw();

	//context.beginPath();
	//context.rect(20, 20,100, 100)
	//context.stroke();
	//context.closePath();

	//context.beginPath();
	//context.arc(70, 70, 50, 0, 2 * Math.PI);
	//context.stroke();
	//context.closePath();

}

generatePoints();