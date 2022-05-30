let aleatorios: number[] = new Array(10);
for (let index = 0; index < 10; index++) {
    aleatorios[index] = Math.floor(Math.random() * 100);
    console.log(`El numero aleatorio nº${index+1} es ${aleatorios[index]}`);
}
