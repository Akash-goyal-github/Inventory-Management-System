import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService} from './services/authentication-service.service';
import { RouterService } from './services/router.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard {

  constructor(private authService:AuthenticationServiceService,private routerService:RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.authService.isUserLoggedIn())
        {
            this.routerService.routeToLogin();
        }
      return this.authService.isUserLoggedIn();
    }
}



  

