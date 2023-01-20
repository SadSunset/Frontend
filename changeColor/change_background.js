var button = document.querySelector("input");

var isBackgroundApplied = "false";

// button.addEventListener("click", function(){
// 	if(isBackgroundApplied === false){
// 		document.querySelector("body").style.background = "blue";
// 		isBackgroundApplied = true;
// 	} else {
// 		document.querySelector("body").style.background = "white";
// 		isBackgroundApplied = false;
// 	}
	
// })

button.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("blue");
});