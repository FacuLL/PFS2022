export default class User {
    private name: string;
    private email: string;
    private phone: string;
    private birth: Date;
    private password: string;

    constructor(name, email, phone, birth, password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.password = this.encriptPassword(password);
    }

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

    public logIn(password): boolean {
        return this.encriptPassword(password) == this.password;
    }

    private encriptPassword(password): string {
        // Encripta contraseña
        return password+"encriptacion magica"
    };
}