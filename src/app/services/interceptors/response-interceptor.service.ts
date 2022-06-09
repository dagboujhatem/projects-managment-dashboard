import { HttpInterceptor, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {

  constructor(private router: Router,
    private toasterService: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          // Unauthenticated User error
          if (error.status === 401 && !request.url.endsWith('/auth/login')) {
            // reomve localStorage data
            localStorage.clear();
            this.toasterService.info("La session a été expiré.",
            'Votre session a été expiré. Merci de refaire le login pour accéder à votre espace.');
            // redirect to the login route
            this.router.navigate(['/login']);
          }
          // Not Found error
          if (error.status === 404) {
            this.router.navigate(['/404']);
          }
          // Server error
          if (error.status === 500) {
            this.router.navigate(['/500']);
          }
          return throwError(error);
        })
      );
    }  

}
