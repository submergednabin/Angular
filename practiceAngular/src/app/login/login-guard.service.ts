import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private loginService:LoginServiceService, private router:Router) {
  }
  canActivate(): boolean {
    if(this.loginService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['./login']);
    return false;
  }
}
