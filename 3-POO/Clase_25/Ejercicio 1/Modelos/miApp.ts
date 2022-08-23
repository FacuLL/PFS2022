// Clase de la aplicacion principal o biblioteca de usuarios.

import BasicUser from "./BasicUser";
import Admin from "./Admin";

export default class MyApp {
    
    private users: BasicUser[] = [];
    private admins: Admin[] = [];

    constructor() {}

    // Getters y setters

    public getAdmins(): Admin[] {
        return this.admins;
    }

    public createAdmin(admin: Admin): void {
        admin.setAdminId(this.admins.length);
        this.admins.push(admin);
    }

    public deleteAdmin(adminid: number): void {
        this.admins.splice(adminid, 1);
    }

    public getUsers(): BasicUser[] {
        return this.users;
    }

    public getUsersNames(): string {
        let names: string = "";
        this.users.forEach(user => {
            names+=`${user.getName()} `;
        });
        return names;
    }

    public createUser(user: BasicUser): void {
        user.setUserId(this.users.length);
        this.users.push(user);
    }

    public deleteUser(userid: number): void {
        this.users.splice(userid, 1);
    }

    public deleteUserPublication(userid: number, publicationPostition: number): void {
        this.users[userid].deletePublication(publicationPostition);
    }

    // Se exporta la matriz de usuarios para ser exportada a la base de datos
    public exportUsersForSave(): any[][] {
        let myUsers: any[][] = new Array(this.users.length);
        for (let i = 0; i < this.users.length; i++) {
            myUsers[i] = new Array(11);
            myUsers[i][0] = this.users[i].getUserId();
            myUsers[i][1] = this.users[i].getName();
            myUsers[i][2] = this.users[i].getEmail();
            myUsers[i][3] = this.users[i].getPhone();
            myUsers[i][4] = this.users[i].getPassword();
            myUsers[i][5] = this.users[i].getBirth();
            myUsers[i][6] = this.users[i].getFollowers().length > 0 ? this.users[i].getFollowers() : "";
            myUsers[i][7] = this.users[i].getFollows().length > 0 ? this.users[i].getFollows() : "";
            myUsers[i][8] = this.users[i].getProfilePic() || "Sin foto";
            myUsers[i][9] = this.users[i].getPublications().length > 0 ? this.users[i].getPublications() : "";
            myUsers[i][10] = this.users[i].getPublicOrPrivate();
        }
        return myUsers;
    }

    // Se exporta la matriz de administradores para ser exportada a la base de datos
    public exportAdminsForSave(): any[][] {
        let myAdmins: any[][] = new Array(this.admins.length);
        for (let i = 0; i < this.admins.length; i++) {
            myAdmins[i] = new Array(7);
            myAdmins[i][0] = this.admins[i].getName();
            myAdmins[i][1] = this.admins[i].getAdminId();
            myAdmins[i][2] = this.admins[i].getEmail();
            myAdmins[i][3] = this.admins[i].getPhone();
            myAdmins[i][4] = this.admins[i].getPassword();
            myAdmins[i][5] = this.admins[i].getBirth();
            myAdmins[i][6] = this.admins[i].getAdminLevel();
        }
        return myAdmins;
    }

    // Se importan nuevos usuarios a partir de una matriz
    public importUsers(users: any[][]): void {
        if (users.length > 0) {
            users.forEach(user => {
                let i = user;
                let myUser = new BasicUser(
                    i[1], 
                    i[2], 
                    i[3], 
                    new Date(i[5]), 
                    i[4], 
                    !!i[10], 
                    i[7].split(',')[0] != '' ? i[7].split(',') : [], 
                    i[6].split(',')[0] != '' ? i[6].split(',') : [], 
                    i[8], 
                    i[9].split(',')[0] != '' ? i[9].split(',') : [], 
                    i[0])
                this.users.push(myUser);
            });
        }
    }

    // Se importan nuevos administradores a partir de una matriz
    public importAdmins(admins): void {
        if (admins.length > 0) {
            admins.forEach(admin => {
                let i = admin;
                let myAdmin = new Admin(i[1], i[2], i[3], new Date(i[5]), i[4], i[6], i[0]);
                this.admins.push(myAdmin);
            });
        }
    }
    
}