function MiembroSquad (fullname, age, hobbies){
	this.fullname = fullname
	this.age = age
	//this.hobby1 = hobby1
	//this.hobby2 = hobby2
	//this.hobby3 = hobby3
	this.hobbies = hobbies
	//this.hobbies = hobby1+hobby2+hobby3
	/*this.mostrarMiembro = function(){
		document.getElementById("squadMember").innerHTML += ("<div><b> Nombre: </b>" + this.fullname + "<br><b> Edad: </b>" + this.age + "<br><b> Hobbies: </b>" + "<ul><li>"+ this.hobby1 + "</li>" + "<li>"+ this.hobby2 +  "</li>" + "<li>"+ this.hobby3 + "</li>" + "</ul>" + "<br>" + "</div>");
	}*/
}

function principal(){
	var members = [];
	var pauLee = new MiembroSquad("Paulee Reds", 18, ["Soñar despierta", "Comer un rico", "Que me hagan masajes"])
	//PauLee.mostrarMiembro();
	var valeS = new MiembroSquad("Vale Spuler", 21, ["Comer", "Dormir", "Soñar"])
	//ValeS.mostrarMiembro();
	var valeR = new MiembroSquad("Vale Rodríguez", 25, ["Fumar", "Drogarse", "Jugar videojuegos"])
	//ValeR.mostrarMiembro();
	var joseG = new MiembroSquad("Jose Grez", 22, ["Bailar reggaeton", "Leer", "Dormir"])
	//JoseG.mostrarMiembro();
	var marti = new MiembroSquad("Marti Covarrubias", 27, ["Golpear a la gente", "Comer dulces de la Ale", "Laar"])
	//Marti.mostrarMiembro();
	var fa = new MiembroSquad("Fa Díaz", 31, ["Fumar weed", "Comer jalea", "Dormir"])
	//Fa.mostrarMiembro();
	var ale = new MiembroSquad("Ale Morales", 27, ["Hacer deporte", "Subir cerros", "Cocinar (mientras sube cerros)"])
	//Ale.mostrarMiembro();
	var pauli = new MiembroSquad("Pauli Huañaco", 20, ["Hacer dormir a sus bebés", "Ir al parque", "Ver pelis"])
	//Pauli.mostrarMiembro();

	members.push(pauLee);
	members.push(valeS);
	members.push(valeR);
	members.push(joseG);
	members.push(marti);
	members.push(fa);
	members.push(ale);
	members.push(pauli);


	members.forEach(function (el){
    var contenedor = document.getElementById("squadMember");
    squadMember.innerHTML += "<div><b> Nombre: </b>" + el.fullname + "<br><b> Edad: </b>" + el.age + " años <br>" + "<b> Hobbies: </b>"+ "<ul><li>" + el.hobbies[0] + "</li><li>" +
    el.hobbies[1] + "</li><li>" + el.hobbies[2] + "</li></ul></div><br>";
  	});

	return members;
}

principal();


	