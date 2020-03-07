import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // dependency injection
  constructor(private http: HttpClient) { }
  getData() {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get(url).pipe(
      map(data => console.log(data)),
      catchError((error)=> throwError(error))
    )
  }
  ngOnInit() {
  
  }
}
