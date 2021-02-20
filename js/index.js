var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){

	if(character.classList != "animate"){
		character.classList.add("animate");
	}

	setTimeout(function(){
		character.classList.remove("animate");
	},500)
}

var checkDead = setInterval(function(){
	var characterMove = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockMove = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	if (blockMove<20 && blockMove<0 && characterMove>=130){
		block.style.animation = "none";
		block.style.display = "none";
		document.write("You lose");
	}
})