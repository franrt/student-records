
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
  html += this.name.toUpperCase() + "<br>" + "Tech Skills " + this.techSkills +"<br>"+ "Life Skills " +this.lifeSkills;
  return html;
}

//Función que une todas las personas guardadas en el array students
function mergeHTML (){
  var html = '';
  for (i=0; i<students.length; i++){
    html += name[i].toHTML();
  }
  return html;
}

//función que imprime el ultimo estudiante luego de ingresarlo
function printHTML(html){
  espacio.innerHTML = '';
  espacio.innerHTML = html;
}