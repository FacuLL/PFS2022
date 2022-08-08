var materias = ['Matematica', 'Fisica', 'Programacion', 'Educacion Fisica', 'Politica'];
var colores = ['lightseagreen', 'darkcyan', 'forestgreen', 'lightcoral', 'yellow']

var nombres = [];
var fechas = [];
var materiasactuales = [];


function isEmpty(text) {
    if(text.replace(/^\s+|\s+$/g,"") == "") {
        return true;
    };
    return false;
}

function isValidSubject(subject) {
    for (let i = 0; i < materias.length; i++) {
        if(subject == materias[i]) return true;
    }
    return false;
}

function loadAssists() {
    document.getElementById('tablebody').innerHTML = '<tr><th>Alumno</th><th>Fecha</th><th>Materia</th></tr>'
    for (let i = 0; i < nombres.length; i++) {
        let tr = document.createElement('tr');
        let tdNombre = document.createElement('td');
        let tdFecha = document.createElement('td');
        let tdMateria = document.createElement('td');

        tdNombre.innerHTML = nombres[i];
        tdFecha.innerHTML = fechas[i];
        tdMateria.innerHTML = materiasactuales[i];

        tr.appendChild(tdNombre);
        tr.appendChild(tdFecha);
        tr.appendChild(tdMateria);

        let color = colores[materias.indexOf(materiasactuales[i])];
        tr.style = `background-color: ${color}`;

        document.getElementById('tablebody').appendChild(tr);
    }
}

function addAssist() {
    var nombre = document.getElementById('studentName').value;
    var fecha = document.getElementById('date').value;
    var seleccion = document.getElementById('materias')
    var materia = seleccion.options[seleccion.selectedIndex].value;

    if(!isEmpty(nombre) && !isEmpty(fecha) && !isEmpty(nombre)) {
        if(isValidSubject(materia)) {
            nombres.push(nombre);
            fechas.push(fecha);
            materiasactuales.push(materia);
            document.getElementById('error').innerHTML = '';
            loadAssists();
        }
        else {
            document.getElementById('error').innerHTML = 'Debes ingresar una materia valida';
        }
    }
    else {
        document.getElementById('error').innerHTML = 'Faltan datos';
    }
}

function deleteAll() {
   nombres = [];
   fechas = [];
   materiasactuales = [];
   loadAssists(); 
}

loadAssists();
document.getElementById('date').valueAsDate = new Date();

document.getElementById('btSubmit').addEventListener('click', addAssist);
document.getElementById('btDelete').addEventListener('click', deleteAll);