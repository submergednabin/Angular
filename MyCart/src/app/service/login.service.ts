import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../component/login/user';
const USERS = [
  new User('nabin', 'password'),
  new User('submergednabin', 'nabin123'),
];

const usersObservable = of(USERS);
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn: boolean = false;

  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }

  isUserAuthenticated(username:string, password:string):Observable<boolean>{
    return this.getAllUsers().pipe(
      map((users) => {
        const Authenticateduser = users.find(
          (user) => user.username === username && user.password === password
        );
        if (Authenticateduser) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        return this.isLoggedIn;
      })
    );
  }
  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
