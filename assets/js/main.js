//traemos el espacio div desde html con 
var espacio = document.getElementById('espacio');
var students = [];

// Constructor para generar una nueva estudiante

function Student(name, techSkills, lifeSkills) {
    this.name = name;
    this.techSkills = techSkills + "%";
    this.lifeSkills = lifeSkills + "%";
    this.status = "Active";
};

//Método para imprimir una estudiante en html
Student.prototype.toHTML = function(){
  var html = '';
  html += this.name.toUpperCase() + "<br>" + "Tech Skills " + this.techSkills +"<br>"+ "Life Skills " +this.lifeSkills+ "<br><br>";
  return html;
}
//Funciones alerts para botones sin funcionabilidad
function alert1(){
  alert("Estamos trabajando para usted from the hell")
}

function alert2(){
  alert("Ups!! it doesn't works")
}

//Función que une todas las personas guardadas en el array students
function mergeHTML(){students.forEach(function(i){html += name[i].toHTML();});
  return html;
}

//Función que imprime el ultimo estudiante luego de ingresarlo
function printHTML(html){
  espacio.innerHTML = '';
  espacio.innerHTML = html;
}

//Cuando hacen click en el boton de nueva estudiante, crea una nueva estudiante y la añade al array de todas las estudiantes.

function addStudent(){
	var name = prompt('Ingrese su nombre');
	var techSkills = prompt('Ingrese el % de sus Habilidades Tecnicas');
	var lifeSkills = prompt('Ingrese el % de sus Habilidades Emocionales');
	var estudiante = new Student(name,techSkills,lifeSkills);
	students.push(estudiante);

	printHTML(estudiante.toHTML());
};

//Al hacerle click al boton Print All imprime a todas las estudiantes en el html

function printAll(){
	printHTML(mergeHTML());
}
