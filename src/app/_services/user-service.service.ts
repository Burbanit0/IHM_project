import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class UserService {

  usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public getUser(id: any): Observable<User> {
    return this.http.get(this.usersUrl+id);
  }
}
