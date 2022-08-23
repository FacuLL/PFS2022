// Clase capaz de manejar datos y modificar su formato para asi guardarlos en archivos de texto.

import * as fs from 'fs';

export default class TextManager {

    public dataSplitter: string = ";"; // Caracter utilizado como separador de datos dentro de una linea
    public lineSplitter: string = "\n"; // Caracter utilizado como separador de lineas

    constructor(dataSplitter?, lineSplitter?) {
        if(dataSplitter) this.dataSplitter = dataSplitter;
        if(lineSplitter) this.lineSplitter = lineSplitter;
    }

    // Modifica el formato de una matriz para poder ser guardada en un archivo de texto
    public manageExport(data: any[][]): string {
        let newdata: string = ""
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                newdata+=`${data[i][j]}${this.dataSplitter}`;
            }
            newdata+=this.lineSplitter;
        }
        return newdata;
    }

    // Modifica el formato de una string y lo convierte en una matriz
    public manageImport(data: string): any[][] {
        let lines = data.split(this.lineSplitter);
        let newdata: any[][] = new Array(lines.length)
        for (let i = 0; i < lines.length; i++) {
            let eachdata = lines[i].split(this.dataSplitter);
            newdata[i] = new Array(eachdata.length);
            for (let j = 0; j < eachdata.length; j++) {
                newdata[i][j] = eachdata[j];
            }
        }
        if(newdata[0][0] != '') return newdata;
        else return [];
    }

    // Guarda una string en un archivo de texto
    public saveFile(file: string, data: string): void {
        fs.writeFileSync(file, data.trim());
    }

    // Lee un archivo de texto, devolviendo una string de su contenido
    public readFile(file: string): string {
        return fs.readFileSync(file, 'utf8');
    }
}