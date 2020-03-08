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
  getData(url) {
    return this.http.get(url).pipe(
      map(data => data),
      catchError((error) => throwError(error))
    )
  }

  addData(data, url) {
    return this.http.post(url, data).pipe(
      map(data => data),
      catchError((error) => throwError(error))
    )
  }

  updateData(data, url) {
    return this.http.put(url, data).pipe(
      map(data => data),
      catchError((error) => throwError(error))
    )
  }
  deleteData(url, id) {
    return this.http.delete(url + id).pipe(
      map(data => data),
      catchError((error) => throwError(error))
    )
  }

  ngOnInit() {

  }
}
