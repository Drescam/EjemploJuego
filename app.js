let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const ScoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const rock_div= document.getElementById('rock');
const paper_div= document.getElementById('paper');
const scizors_div= document.getElementById('scizors');


function movimientoComp(){
	const opciones=['rock','paper','scizors'];
	const random= Math.floor(Math.random() * 3);
	const move= opciones[random];
	return move;
}

function convertWord(opcion){

	if(opcion == 'rock'){

		return "Piedra ✊🏼";
	}
	else if(opcion == 'paper'){

		return "Papel 🤚🏼";
	}
	else if(opcion == 'scizors'){

		return "Tijeras ✌🏼";
	}

}

function ganar(opcionUser, opcionPC){

	userScore++;
	userScore_span.innerHTML=userScore;
	result_div.innerHTML= "La PC eligió: "+convertWord(opcionPC)+". <br>¡Haz ganado!";
	const userChoice_div= document.getElementById(opcionUser);
	const pcChoice_div= document.getElementById(opcionPC);
	userChoice_div.classList.add('verde');
	pcChoice_div.classList.add('rojo');
	setTimeout(function(){
		userChoice_div.classList.remove("verde");
		pcChoice_div.classList.remove("rojo");
	}, 1500);

}

function perder(opcionUser, opcionPC){

	compScore++;
	compScore_span.innerHTML=compScore;
	result_div.innerHTML= "La PC eligió: "+convertWord(opcionPC)+". <br>¡Haz perdido!";
	const userChoice_div= document.getElementById(opcionUser);
	const pcChoice_div= document.getElementById(opcionPC);
	userChoice_div.classList.add('rojo');
	pcChoice_div.classList.add('verde');
	setTimeout(function(){
		userChoice_div.classList.remove("rojo");
		pcChoice_div.classList.remove("verde");
	}, 1500);
}

function empatar(opcionUser){
	result_div.innerHTML= "Ambos eligieron: "+convertWord(opcionUser)+". <br>¡Han empatado!";
	const userChoice_div= document.getElementById(opcionUser);
	userChoice_div.classList.add('azul');
	setTimeout(function(){
		userChoice_div.classList.remove("azul");		
	}, 1500);
}


function game(opcion){
	const movimientoPC= movimientoComp();
	const movimientoUser= opcion;

	switch (movimientoUser+movimientoPC) {

		case 'rockscizors':				
		case 'scizorspaper':		
		case 'paperrock':		
			ganar (movimientoUser,movimientoPC);
		break;
		case 'rockpaper':
		case 'scizorsrock':
		case 'paperscizors':
			perder (movimientoUser,movimientoPC);
		break;
		case 'rockrock':
		case 'scizorsscizors':
		case 'paperpaper':
			empatar (movimientoUser);
		break;
	}

}


function main() {

rock_div.addEventListener('click', () => game("rock"));
paper_div.addEventListener('click', () => game("paper"));
scizors_div.addEventListener('click', () => game("scizors"));

}
main();