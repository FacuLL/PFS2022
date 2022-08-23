// Clase de un usuario comun, capaz de interactuar en la aplicacion, seguiendo otros usuarios o creando publicaciones

import User from "./User"; 

export default class BasicUser extends User {

    private userid: number;
    private followsIds: number[] = [];
    private followersIds: number[] = [];
    private profilePic: string;
    private publications: string[] = []; // Se deberia crear una clase de tipo publicacion.
    private publicaccount: boolean = false;

    constructor(name, email, phone, birth, password, publicaccount?, followsids?, followersids?, profilepic?, publications?, userid?) {
        super(name, email, phone, birth, password);
        if (publicaccount) this.publicaccount = publicaccount;
        if (followsids) this.followsIds = followsids;
        if (followersids) this.followersIds = followersids;
        if (profilepic) this.profilePic = profilepic;
        if (publications) this.publications = publications;
        if (userid) this.userid = userid;

    }

    // Getters y setters

    public getUserId(): number {
        return this.userid;
    }

    public setUserId(id: number) : void {
        if (!this.userid) this.userid = id;
    }

    public getFollows(): number[] {
        return this.followsIds;
    }

    public addFollow(followid: number): void {
        var index = this.followsIds.indexOf(followid);
        if (index == -1) this.followsIds.push(followid);
    }

    public removeFollow(followid: number): void {
        var index = this.followsIds.indexOf(followid);
        if (index != -1) this.followsIds.splice(index, 1);
    }

    public getFollowers(): number[] {
        return this.followersIds;
    }

    public addFollowers(followid: number): void {
        var index = this.followersIds.indexOf(followid);
        if (index == -1) this.followersIds.push(followid);
    }

    public removeFollowers(followid: number): void {
        var index = this.followersIds.indexOf(followid);
        if (index != -1) this.followersIds.splice(index, 1);
    }

    public changeProfilePic(image: any): void {
        var myimage: string = 'https://.....';
        // Se obtiene la imagen
        this.profilePic = myimage;
    }

    public getProfilePic() : string {
        return this.profilePic;
    }

    public getPublications() : string[] {
        return this.publications;
    }

    public addPublication(caption: string) : void {
        this.publications.push(caption);
    }

    public deletePublication(position: number) : void {
        this.publications.splice(position, 1);
    }

    public getPublicOrPrivate(): boolean {
        return this.publicaccount;
    }
    
}