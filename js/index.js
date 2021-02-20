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
var i = 0;

function change(content){
	var character = document.getElementById("character");
	character.innerHTML = content;
}

while (i>0){
	i++;
	if (i == 2000) {
		content = "Backend_dev";
		change(content);
		if (i == 4000) {
			content = "Software_design";
			change(content);
			i = 0;
		}
	}
}
