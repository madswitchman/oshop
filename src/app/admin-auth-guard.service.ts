import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
 
  constructor(private auth: AuthService, private userService: UserService) { }
 
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
  }
}
 