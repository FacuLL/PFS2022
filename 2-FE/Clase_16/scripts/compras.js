function mostrarArticulos() {
    var tabla = '';
    if(articulos.length > 0) {
        var suma = 0;
        for (let i = 0; i < articulos.length; i++) {
            var preciototal = cantidades[i]*precios[i];
            suma += preciototal;
            tabla += `<tr><td>${articulos[i]}</td><td>${cantidades[i]}</td><td>${precios[i]}</td><td>${preciototal}</td><td><img onclick="javascript: deleteItem(${i})" width="25" src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png"></td></tr>`;
        }
        tabla += `<tr><td>Total</td><td></td><td></td><td>${suma}</td><td></td></tr>`
        document.getElementById('mensajecompra').innerHTML = "Compra realizada. Total: " + suma + "$";
    }
    else {
        tabla = '<tr><td>Vacio</td><td></td><td></td><td></td><td></td></tr>';
    }
    document.getElementsByTagName('tbody')[0].innerHTML = tabla;
}

function isEmpty(text) {
    if(text.replace(/^\s+|\s+$/g,"") == "") {
        return true;
    };
    return false;
}

function addItem() {
    var name = document.getElementById('name').value;
    var cant = document.getElementById('cant').value;
    var precio = document.getElementById('precio').value;
    if(!isEmpty(name) && !isEmpty(cant) && !isEmpty(precio)) {
        if(!isNaN(Number(cant)+Number(precio))) {
            articulos.push(name);
            cantidades.push(cant);
            precios.push(precio);
            document.getElementById('name').value = "";
            document.getElementById('cant').value = "";
            document.getElementById('precio').value = "";
        }
        else {
            document.getElementById('error').innerHTML = 'La cantidad y el precio deben ser numeros validos';
        }
    }
    else {
        document.getElementById('error').innerHTML = 'Faltan datos';
    }
    mostrarArticulos();
}

function deleteItem(id) {
    articulos.splice(id, 1);
    cantidades.splice(id, 1);
    precios.splice(id, 1);
    mostrarArticulos();
}

var articulos = []
var cantidades = []
var precios = []
mostrarArticulos();

document.getElementById('additem').addEventListener('click', addItem)
document.getElementById('comprar').addEventListener('click', ()=> {
    if(articulos.length > 0) {
        document.getElementById('comprarealizada').style.display = "block";
        document.getElementById('divcompra').style.display = "none";
    }
    else {
        document.getElementById('error').innerHTML = 'Agrega al menos un articulo para comprar';
    }
})
document.getElementById('otracompra').addEventListener('click', () => {
    document.getElementById('comprarealizada').style.display = "none";
    document.getElementById('divcompra').style.display = "block";
    articulos = [];
    cantidades = [];
    precios = [];
    mostrarArticulos();
})