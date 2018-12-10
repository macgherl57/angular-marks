import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CanActivateGuard implements CanActivate {
  constructor(private lC: ApiService, private _router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //console.log('Inside CanActivate');
      if (!this.lC.isSignedIn()) {
      //console.log('insife CanActivate if; value of lC.isSignedIn: ' + this.lC.isSignedIn());
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
