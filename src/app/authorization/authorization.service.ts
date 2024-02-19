import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../environments/environment';
import { ILogin } from './authorization.models';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {}

  login(body: ILogin): Observable<any> { // Observable<ILoginResponse>
    return this.http.post(`${ENV.BASEURL}/login`, body);
  }

  register(body: any): Observable<any> { // make an interface instead of any for body
    return this.http.post(`${ENV.BASEURL}/register`, body);
  }
}
