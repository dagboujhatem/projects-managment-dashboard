import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router,
    private authService: AuthService,
    private toasterService: ToastrService,
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();
    if (token) {
      const isexpired = this.authService.isExpiredToken(token)
      if (!isexpired) {
        return true
      } else {
        this.toasterService.info("La session a été expiré.",
        'Votre session a été expiré. Merci de refaire le login pour accéder à votre espace.');
        localStorage.removeItem('token');
        localStorage.removeItem('avatar');
        this.router.navigate(['/login'])
        return false;
      }
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }  

  
}
