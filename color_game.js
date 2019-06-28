var numsquares = 6;
var colors = generaterandomcolor(numsquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#message");
var resetbutton = document.querySelector("#reset");
var pickedcolor = pickcolor();
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares = 3;
	h1.style.background = "steelblue";
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	h1.style.background = "steelblue";
	numsquares = 6;
	colors = generaterandomcolor(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetbutton.addEventListener("click", function(){
    //generate new colors
	colors = generaterandomcolor(numsquares);

	//pick a new random colors 
	pickedcolor = pickcolor();

	//change color display to match pick color
	colordisplay.textContent = pickedcolor;

	messagedisplay.textContent = "";
	this.textContent = "New Colors";

	//change colors of all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}

	//change background color of h1
	 h1.style.backgroundColor = "steelblue";
});


colordisplay.textContent = pickedcolor;

for(var i=0;i<squares.length;i++)
{
	//add intial color to square 
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click",function(){
		//grab color of picked square
		var clickedcolor = this.style.backgroundColor;
		//compare theclicked and picked color
        if(clickedcolor === pickedcolor)
        {
        	messagedisplay.textContent = "Correct!!";
        	resetbutton.textContent = "Play Again ?";
            changeColor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
        }
        else
        {
        	this.style.backgroundColor = "#232323";
        	messagedisplay.textContent = "Try Again!!";
        }
	});
}

//function to change color

function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

//function to pick a random color
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//function to generate random colors
function generaterandomcolor(num){
	var arr = [];

    for(var i=0; i<num;i++){
    	arr.push(randomcolors());
        
    }

	return arr;
}

function randomcolors(){
	//for red between 0-255
	var r = Math.floor(Math.random() * 256); 

	//for green between 0-255
	var g = Math.floor(Math.random() * 256);

	//for blue between 0-255
	var b = Math.floor(Math.random() * 256);

	 return "rgb(" + r + ", " + g + ", " + b + ")";
}