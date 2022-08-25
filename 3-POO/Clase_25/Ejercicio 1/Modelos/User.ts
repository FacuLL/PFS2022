// Usuario básico que luego heredarán las otras clases

export default abstract class User {
    private name: string;
    private email: string;
    private phone: string;
    private birth: Date;
    private password: string;

    constructor(name: string, email: string, phone: string, birth: Date, password: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.password = this.encriptPassword(password);
    }

    // Getters y setters

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getBirth(): Date {
        return this.birth;
    }

    public getPassword(): string {
        return this.password;
    }

    // Se comprueba si una contraseña coincide con la del usuario
    public logIn(password): boolean {
        return this.encriptPassword(password) == this.password;
    }

    // Se simula una encriptacion de una contraseña
    private encriptPassword(password): string {
        // Encripta contraseña
        return password+"encriptacion magica"
    };
}