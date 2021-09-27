import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginFormClass } from '../LoginFormClass';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  
  constructor(private httpClient: HttpClient) { }

  authenticate(userObj:LoginFormClass): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/airbusManagement/JWT/authenticateUser',userObj);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token');
    return !(user === null);
  }

}

// .pipe(
//   map(
//     userData => {
//      console.log("authenticatio done");
//      sessionStorage.setItem('username',userObj.username);
//      let tokenStr= 'Bearer '+userData.token;
//      sessionStorage.setItem('token', tokenStr);
//      return userData;
//     }
//   )

//  );