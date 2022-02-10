import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

// STEP 1: definizione interfaccia (opzionale)

export interface UserData {
  user_id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // STEP 2: import HttpClient per eseguire richieste HTTP
  constructor(private http: HttpClient) {
  }

  // STEP 3: definizione metodo per il recupero delle richieste
  // tslint:disable-next-line:typedef
  getUsers() {
    return this.http.get<UserData[]>(environment.baseURL + '/users');
  }

  // tslint:disable-next-line:typedef
  addUser(body) {
    return this.http.post(environment.baseURL + '/users', body);
  }

  // tslint:disable-next-line:typedef
  deleteUser(user_id) {
    return this.http.delete(environment.baseURL + '/users/' + user_id);
  }

}
