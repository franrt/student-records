
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
Producto.prototype.toHTML = function () {
  var html = '';
  html += //aqui tengo que usar el constructor para crear el formato e como aparecera cada vez que se agregue una alumna
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

//función que imprime un estudiante luego de ingresarlo
function printHTML (html){
  techSkills.innerHTML = '';
  lifeSkills.innerHTML = html;
}


