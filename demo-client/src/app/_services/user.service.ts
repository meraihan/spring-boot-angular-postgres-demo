import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${API_URL}` + 'users');
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${API_URL}`+'users' +`/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put(`${API_URL}`+'users' +`/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${API_URL}`+'users' +`/${id}`);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
