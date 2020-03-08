import { Injectable } from '@angular/core';
import { HttpService } from "../common/http.service";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpService) { }

    addUser(url,data) {
        return this.http.addData(url, data);
    }
    updateUser(url,data) {
        return this.http.updateData(url, data);
    }
    deleteUser(url,id) {
        return this.http.deleteData(url, id);
    }
    getUser(url) {
        return this.http.getData(url);
    }

}