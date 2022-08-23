import User from "./User"; 
import MyApp from "./miApp";

export default class Admin extends User {

    private adminid: number;
    private adminlevel: number;

    constructor(name, email, phone, birth, password, adminlevel, adminid?) {
        super(name, email, phone, birth, password);
        this.adminlevel = adminlevel;
        if(adminid) this.adminid = adminid
    }

    public getAdminId(): number {
        return this.adminid;
    }

    public setAdminId(id: number): void {
        if(!this.adminid) this.adminid = id;
    }

    public getAdminLevel(): number {
        return this.adminlevel;
    }

    public deleteUser(app: MyApp, userid: number) {
        app.deleteUser(userid);
    }

    public deleteUserPublication(app: MyApp, userid: number, publicationPostition: number) {
        app.deleteUserPublication(userid, publicationPostition);
    }
    
}