import { Injectable } from '@angular/core';
import { AuthService } from '../api/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    if (token != null) {
      const newRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        },
      })
      return next.handle(newRequest);
    } else {
      return next.handle(request)
    }
  }
}
