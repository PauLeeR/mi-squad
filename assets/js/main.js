function MiembroSquad (fullname, age, hobby1, hobby2, hobby3){
	this.fullname = fullname
		//document.getElementById
	this.age = age
	this.hobby1 = hobby1
	this.hobby2 = hobby2
	this.hobby3 = hobby3
	//this.hobbies = hobbies
	//this.hobbies = hobby1+hobby2+hobby3
	this.mostrarMiembro = function(){
		document.getElementById("squadMember").innerHTML += ("<div><b> Nombre: </b>" + this.fullname + "<br><b> Edad: </b>" + this.age + "<br><b> Hobbies: </b>" + "<ul><li>"+ this.hobby1 + "</li>" + "<li>"+ this.hobby2 +  "</li>" + "<li>"+ this.hobby3 + "</li>" + "</ul>" + "<br>" + "</div>");
	}
}
	
const PauLee = new MiembroSquad("Paulee Reds", 18, "Soñar despierta", "Comer un rico", "Que me hagan masajes")
PauLee.mostrarMiembro();

const ValeS = new MiembroSquad("Vale Spuler", 21, "Comer", "Dormir", "Soñar")
ValeS.mostrarMiembro();

const ValeR = new MiembroSquad("Vale Rodríguez", 25, "Fumar", "Drogarse", "Jugar videojuegos")
ValeR.mostrarMiembro();

const JoseG = new MiembroSquad("Jose Grez", 22, "Bailar reggaeton", "Leer", "Dormir")
JoseG.mostrarMiembro();

const Marti = new MiembroSquad("Marti Covarrubias", 27, "Golpear a la gente", "Comer dulces de la Ale", "Laar")
Marti.mostrarMiembro();

const Fa = new MiembroSquad("Fa Díaz", 31, "Fumar weed", "Comer jalea", "Dormir")
Fa.mostrarMiembro();

const Ale = new MiembroSquad("Ale Morales", 27, "Hacer deporte", "Subir cerros", "Cocinar (mientras sube cerros)")
Ale.mostrarMiembro();

const Pauli = new MiembroSquad("Pauli Huañaco", 20, "Hacer dormir a sus bebés", "Ir al parque", "Ver pelis")
Pauli.mostrarMiembro();
