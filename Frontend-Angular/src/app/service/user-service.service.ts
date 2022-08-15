import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Login } from '../model/Login';
import { catchError, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  urlPath = 'http://localhost:8085/carrito/';
  urlSave =  this.urlPath + 'cliente/create';
  urlLogin = this.urlPath + 'auth/authenticate';
  private login$:Subject<any>;

  constructor(private http: HttpClient) { 
    this.login$ = new Subject();
  }

  createUser(user: User) {
    console.log(  );
    return this.http.post<any[]>(this.urlSave, user);
  }

  loginUser(user: User) {
    return this.http
    .post<Login>(this.urlLogin, user)
    .pipe(
      map((data: Login) => {
        this.login$.next(data);
        return data;
      })
    );
  }
  
  getResponseLogin$(){
    return this.login$.asObservable();
  }

}
