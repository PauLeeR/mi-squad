function MiembroSquad (fullname, age, hobbies){
	this.fullname = fullname
	this.age = age
	this.hobbies = hobbies
	//this.hobbies = hobby1+hobby2+hobby3
	/*this.mostrarMiembro = function(){
		document.getElementById("squadMember").innerHTML += ("<div><b> Nombre: </b>" + this.fullname + "<br><b> Edad: </b>" + this.age + "<br><b> Hobbies: </b>" + "<ul><li>"+ this.hobby1 + "</li>" + "<li>"+ this.hobby2 +  "</li>" + "<li>"+ this.hobby3 + "</li>" + "</ul>" + "<br>" + "</div>");
	}*/
}

function Comentario(id_miembro, comentario, likes){
    this.id_miembro = id_miembro;//miembro del squad al que se le deja un comentario
    this.comentario = comentario;//comentarios para los miembros del squad
    this.likes = likes; //Contador de likes para los comentarios

}

/*function agregarComentario(){ //función que va a añadir más tareas a mi lista
  var boton = document.createElement("button");
  var dejarComentario = document.createTextNode("Dejar Comentario");
  boton.appendChild(dejarComentario);
  document.body.appendChild(boton);
}*/

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

	members.forEach(function (el, i){
    var contenedor = document.getElementById('squadMember');
    squadMember.innerHTML += "<div><b> Nombre: </b>" + el.fullname + "<br><b> Edad: </b>" + el.age + " años <br>" + "<b> Hobbies: </b>"+ "<ul><li>" + el.hobbies[0] + "</li><li>" +
    el.hobbies[1] + "</li><li>" + el.hobbies[2] + "</li></ul></div><br>";
  	
  	var miembro = document.createElement('div');
    miembro.id = 'member ' + (i+1);
    //creamos el elemento foto para posteriormente meterlo al html 
    var pic = document.createElement('img');
    pic.src = 'pics/' + el.fullname + '.jpg';
    pic.height = 120;
    pic.width = 120;

    miembro.appendChild(pic);//metemos el elemento foto a cada miembro del squad
    squadMember.appendChild(miembro);//aquí ponemos a cada miembro del squad en un div, y estos a su vez van dentro de la seccion principal

	var seccionDeComentarios = document.createElement('section');
    seccionDeComentarios.id = 'sección ' + miembro.id;

    var comentarios = document.createElement('textarea');
	comentarios.cols = 30;
	comentarios.rows = 3;
	comentarios.className = 'Comentarios';
	comentarios.id = 'Cajita de comentarios de ' + miembro.id;
	seccionDeComentarios.appendChild(comentarios);

	var botoncito = document.createElement('BUTTON');
    var queDice = document.createTextNode('Deja tu comentario');
    botoncito.appendChild(queDice);
    seccionDeComentarios.appendChild(botoncito);
    //queDice.appendChild(botoncito);
    //document.body.section.appendChild(botoncito);
	squadMember.appendChild(seccionDeComentarios);

	/*document.getElementById("body").innerHTML =//UNA OPCION ES CON INNER HTML, LA MAS FACIL CREO YO PERO NO SIRVE PARA ESTOS EFECTOS DE MANEJAR HTML DESDE JS
   '<textarea maxlength="5000" cols="80" rows="40"></textarea>' + 
   '<button></button>"':

	var input = document.createElement('textarea');//EJEMPLO SACADO DE LA WEB
    input.name = 'post';
    input.maxLength = 5000;
    input.cols = 80;
    input.rows = 40;
    input.className = 'myCustomTextarea';
    var button = document.createElement('button');
    var oBody = document.getElementById("body");
    while (oBody.childNodes.length > 0) {
        oBody.removeChild(oBody.childNodes[0]);
    }
    oBody.appendChild(input);
    oBody.appendChild(button);  */
   
	
	});

	return members;
}
	/*for(var i = 0; i< members.length; i++){
  		var contenedor = document.getElementById("squadMember");
    	contenedor.innerHTML += "<div id='m"+i+"'><b>Nombre: </b>" + members[i].fullname + " " + "<br><b>Edad: </b>" + members[i].age + " años <br>" + "<b>Hobbies: </b><ul><li>" + members[i].hobbies[0] + "</li><li>" + members[i].hobbies[1] + "</li><li>" + members[i].hobbies[2] + "</li></ul><textarea id='comentarios-m"+i+"' row='30' col='10'/> </textarea></div>";
	}
	
	return members;	*/

principal();


	