import { Injectable } from "@angular/core";
import { UserService } from "../end-points/user.service";
import { HttpClient } from "@angular/common/http";
import { HttpService } from '../common/http.service';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpService) { }

    userService = new UserService(this.http);


}

