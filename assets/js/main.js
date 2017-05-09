
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


//Método para imprimir un producto en html
Student.prototype.toHTML = function () {
  var html = '';
  html += //aqui tengo que usar el constructor para crear el formato e como aparecera cada vez que se agregue una alumna
  return html;
}



