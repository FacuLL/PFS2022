var tareas = [];

function mostrarTareas() {
    var lista = '';
    if (tareas.length > 0) {
        for (let i = 0; i < tareas.length; i++) {
            if (botones[i]) {
                lista += `
                <div class="lista">
                <button class="btlist prendido" onclick="toggletask(${i})"><img></button>
                <p>${tareas[i]}</p>
                <button class="btdelete" onclick="deleteitem(${i})"><img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" class="btimage"></button>
                </div>`
            }
            else {
                lista += `
                <div class="lista">
                <button class="btlist" onclick="toggletask(${i})"><img></button>
                <p>${tareas[i]}</p>
                <button class="btdelete" onclick="deleteitem(${i})"><img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" class="btimage"></button>
                </div>`
            }
        }
    }
    else {
        lista = `<h2>Vacio</h2>`
    }
    document.getElementsByClassName('divlista')[0].innerHTML = lista;
}

var botones = []
function addtask() {
    var task = document.getElementById('name').value;
    tareas.push(task);
    botones.push(false);
    mostrarTareas();
    document.getElementById('name').value = '';
}

function deleteitem(id) {
    tareas.splice(id, 1);
    botones.splice(id, 1);
    mostrarTareas();
}

function toggletask(id) {
    document.querySelectorAll('.btlist')[id].classList.toggle('prendido');
    botones[id] = !botones[id]
}

mostrarTareas();

document.getElementById('btAdd').addEventListener('click', addtask)

