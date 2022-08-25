import BasicUser from "./BasicUser";
import Admin from "./Admin";

import * as fs from 'fs';

export default class MyApp {
    
    private users: BasicUser[] = [];
    private admins: Admin[] = [];

    constructor() {
        this.getInfo();
    }

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

    public saveInfo(): void {
        let myUsers: string = "";
        this.users.forEach(user => {
            myUsers+=`${user.getUserId()},\n`;
            myUsers+=`${user.getName()},\n`;
            myUsers+=`${user.getEmail()},\n`;
            myUsers+=`${user.getPhone()},\n`;
            myUsers+=`${user.getPassword()},\n`;
            myUsers+=`${user.getBirth()},\n`;
            myUsers+=`${user.getFollowers()},\n`;
            myUsers+=`${user.getFollows()},\n`;
            myUsers+=`${user.getProfilePic()},\n`;
            myUsers+=`${user.getPublications()},\n`;
            myUsers+=`${user.getPublicOrPrivate()},\n`;
        })
        fs.writeFileSync('users.txt', myUsers.trim());

        let myAdmins: string = "";
        this.admins.forEach(admin => {
            myAdmins+=`${admin.getAdminId()},\n`;
            myAdmins+=`${admin.getName()},\n`;
            myAdmins+=`${admin.getEmail()},\n`;
            myAdmins+=`${admin.getPhone()},\n`;
            myAdmins+=`${admin.getPassword()},\n`;
            myAdmins+=`${admin.getBirth()},\n`;
            myAdmins+=`${admin.getAdminLevel()},\n`;
        })
        fs.writeFileSync('admins.txt', myAdmins.trim());
    }

    public getInfo(): void {
        let myUsers: string = fs.readFileSync('users.txt', 'utf8');
        let users: string[] = myUsers.split('\n');
        users.forEach(user => {
            let i = user.split(',');
            let myUser = new BasicUser(i[1], i[2], i[3], new Date(i[5]), i[4], i[10], [i[7]], [i[6]], i[8], [i[9]], i[0])
            this.users.push(myUser);
        });

        let myAdmins: string = fs.readFileSync('admins.txt', 'utf8');
        let admins: string[] = myAdmins.split('\n');
        admins.forEach(admin => {
            let i = admin.split(',');
            let myAdmin = new Admin(i[1], i[2], i[3], new Date(i[5]), i[4], i[6], i[0]);
            this.admins.push(myAdmin);
        });
    }
}