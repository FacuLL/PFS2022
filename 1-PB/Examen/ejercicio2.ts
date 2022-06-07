// Este programa comprueba algunas formulas para manipular numeros y determina si sirve o no

// Formula 1: Suma de los primeros N numeros

// Formula a comprobar
function sumaPrimerosNumeros(N: number): number {
    return (N * (N+1)) / 2
}

// Procedimiento que sabemos que funciona
function sumaPrimerosNumeros2(N: number): number {
    let suma: number = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    return suma;
}

// Comprobamos la formula con distintos numeros naturales
console.log((sumaPrimerosNumeros(5) == sumaPrimerosNumeros2(5))?'La formula 1 funciona con 5':'La formula 1 no funciona con 5');
console.log((sumaPrimerosNumeros(12) == sumaPrimerosNumeros2(12))?'La formula 1 funciona con 12':'La formula 1 no funciona con 12');
console.log((sumaPrimerosNumeros(110) == sumaPrimerosNumeros2(110))?'La formula 1 funciona con 110':'La formula 1 no funciona con 110');
console.log((sumaPrimerosNumeros(1) == sumaPrimerosNumeros2(1))?'La formula 1 funciona con 1':'La formula 1 no funciona con 1');

// Formula 2: sumatoria entre numeros naturales entre P y Q

// Formula a comprobar
function sumaEntreNumeros(P: number, Q: number) {
    return ((P+Q) * (Q-P-1)) / 2;
}

// Procedimiento que sabemos que funciona
function sumaEntreNumeros2(P: number, Q: number) {
    let suma: number = 0;
    for (let i = P; i <= Q; i++) {
        suma += i;
    }
    return suma;
}

// Comprobamos la formula con distintos numeros naturales
console.log((sumaEntreNumeros(5,11) == sumaEntreNumeros2(5,11))?'La formula 2 funciona con 5,11':'La formula 2 no funciona con 5,11');
console.log((sumaEntreNumeros(1,1) == sumaEntreNumeros2(1,1))?'La formula 2 funciona con 1,1':'La formula 2 no funciona con 1,1');
console.log((sumaEntreNumeros(110,201) == sumaEntreNumeros2(110,201))?'La formula 2 funciona con 110,201':'La formula 2 no funciona con 110,201');

// Formula 3: sumatoria de cuadrados entre primeros N números naturales.

// Formula a comprobar
function sumaCuadrados(N: number) {
    return (N * (N+1) * ((2*N)+1)) / 6
}

// Procedimiento que sabemos que funciona
function sumaCuadrados2(N: number) {
    let suma: number = 0;
    for (let i = 0; i < N; i++) {
        suma += i**2;
    }
    return suma;
}

// Comprobamos la formula con distintos numeros naturales
console.log((sumaCuadrados(5) == sumaCuadrados2(5))?'La formula 1 funciona con 5':'La formula 1 no funciona con 5');
console.log((sumaCuadrados(12) == sumaCuadrados2(12))?'La formula 1 funciona con 12':'La formula 1 no funciona con 12');
console.log((sumaCuadrados(110) == sumaCuadrados2(110))?'La formula 1 funciona con 110':'La formula 1 no funciona con 110');
console.log((sumaCuadrados(1) == sumaCuadrados2(1))?'La formula 1 funciona con 1':'La formula 1 no funciona con 1');
