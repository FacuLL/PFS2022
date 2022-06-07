// Este programa permite analizar las ventas semanales de cada vendedor y así:
//      - Encontrar la mejor venta de cada vendedor
//      - Encontrar la peor venta de cada vendedor
//      - Calcular el promedio de ventas de cada vendedor
//      - Encontrar al mejor vendedor de cada semana
//      - Encontrar al peor vendedor de cada semana

// Ingresamos los datos de cada vendedor 
let venCamila: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]; //Camila
let venFranco: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]; //Franco
let venAlicia: number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; //Alicia
let venMatias: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]; //Matias
let venSandra: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]; //Sandra

// Inicializamos una matriz que nos permitirá trabajar más comodamente y con menos texto permitiendo el uso de bucles.
let matriz: number[][] = new Array(5);
// Ingresamos los nombres de cada vendedor para identificar a cada uno en la matriz.
let nombres: string[] = ['Camila', 'Franco', 'Alicia', 'Matias', 'Sandra'];

// Funcion que permite rellenar la matriz con los datos
function rellenarMatriz(matriz: number[][], vRelleno: number[], posicion: number) {
    matriz[posicion] = new Array(vRelleno.length)
    for (let i = 0; i < vRelleno.length; i++) {
        matriz[posicion][i] = vRelleno[i];  
    }
}

// Funcion que permite encontrar la posicion del numero maximo en un arreglo
function sacarVentaMaxima(v: number[]): number {
    let posmax: number = 0;
    for (let i = 0; i < v.length; i++) {
        if(v[i] > v[posmax]) {
            posmax = i;
        }
    }
    return posmax;
}

// Funcion que permite encontrar la posicion del numero minimo en un arreglo
function sacarVentaMinima(v: number[]): number {
    let posmin: number = 0;
    for (let i = 0; i < v.length; i++) {
        if(v[i] < v[posmin]) {
            posmin = i;
        }
    }
    return posmin;
}

// Funcion que permite determinar la semana y el mes a partir de una posicion de un arreglo
function sacarFecha(position: number): string {
    let month = Math.floor(position/4)+1;
    let week = (position%4)+1;
    return `S${week}M${month}`;
}

// Funcion que permite sacar el promedio entre todos los numeros de un arreglo
function sacarPromedio(v:number[]): number {
    let suma: number = 0;
    for (let i = 0; i < v.length; i++) {
        suma+=v[i];
    }
    return Math.floor(suma/v.length);
}

// Funcion que permite determinar cual es el arreglo con el mayor numero en una matriz, en determinada posicion
function sacarMejorVendedor(matriz: number[][], semana: number): number {
    let mejorVendedor: number = 0;
    let mejorVenta: number = 0;
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i][semana] > mejorVenta) {
            mejorVendedor = i;
            mejorVenta = matriz[i][semana];
        }
    }
    return mejorVendedor;
}

// Funcion que permite determinar cual es el arreglo con el menor numero en una matriz, en determinada posicion
function sacarPeorVendedor(matriz: number[][], semana: number): number {
    let peorVendedor: number = 0;
    let peorVenta: number = matriz[0][semana];
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i][semana] < peorVenta) {
            peorVendedor = i;
            peorVenta = matriz[i][semana];
        }
    }
    return peorVendedor;
}

// Funcion que permite imprimir los datos utilizando todas las funciones establecidas anteriormente.
function imprimirDatos(matriz: number[][], nombres: string[]) {
    // Imprimimos los datos por vendedor
    for (let i = 0; i < matriz.length; i++) {
        console.log(`Nombre: ${nombres[i]}`);
        console.log(`Mejor semana: ${sacarFecha(sacarVentaMaxima(matriz[i]))}, con ${matriz[i][sacarVentaMaxima(matriz[i])]} ventas`);
        console.log(`Peor semana: ${sacarFecha(sacarVentaMinima(matriz[i]))}, con ${matriz[i][sacarVentaMinima(matriz[i])]} ventas`);
        console.log(`Promedio: ${sacarPromedio(matriz[i])}`);
        console.log();
    }
    // Imprimimos los datos del mejor vendedor de cada semana
    for (let i = 0; i < matriz[0].length; i++) {
        console.log(`Mejor vendedor de semana ${i+1}: ${nombres[sacarMejorVendedor(matriz, i)]}, con ${matriz[sacarMejorVendedor(matriz, i)][i]} ventas`);
    }
    console.log('');
    // Imprimimos los datos del peor vendedor de cada semana
    for (let i = 0; i < matriz[0].length; i++) {
        console.log(`Peor vendedor de semana ${i+1}: ${nombres[sacarPeorVendedor(matriz, i)]}, con ${matriz[sacarPeorVendedor(matriz, i)][i]} ventas`);
    }
}

// Rellenamos la matriz con los arreglos establecidos anteriormente.
rellenarMatriz(matriz, venCamila, 0);
rellenarMatriz(matriz, venFranco, 1);
rellenarMatriz(matriz, venAlicia, 2);
rellenarMatriz(matriz, venMatias, 3);
rellenarMatriz(matriz, venSandra, 4);

// Imprimimos los datos.
imprimirDatos(matriz, nombres);