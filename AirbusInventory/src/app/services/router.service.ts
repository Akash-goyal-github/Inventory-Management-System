import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  routeToLogin(){
    this.router.navigate(['login']);
  }

  routeToDashboard(){
    this.router.navigate(['dashboard']);
  }

  routeToAllProduct(){
    this.router.navigate(['getAllProducts']);
  }

  routeToUpdateProduct(){
    this.router.navigate(['update']);
  }
}
