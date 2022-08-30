export default class ErrorControlado extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "Error Controlado";
    }
}