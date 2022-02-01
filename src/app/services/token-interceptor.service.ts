import { Injectable, Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) {

  }

  intercept(req:any,next:any) {
    let authService  = this.injector.get(AuthService);
    let tokenizedReq  = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${authService.getToken()}`
      }
    })
    
    return next.handle(tokenizedReq);

  }
}
