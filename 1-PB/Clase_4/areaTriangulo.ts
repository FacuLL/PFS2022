function calcularAreaTriangulo(base:number, altura: number): number {
    return base * altura / 2
}

const veces: number = 7;

for (let i = 1; i <= veces; i++) {
    console.log("El area de un triangulo de base " + i + " y altura " + i*2 + " es " + calcularAreaTriangulo(i, i*2));
}