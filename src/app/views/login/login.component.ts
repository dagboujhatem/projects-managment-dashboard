import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/api/auth.service';
import { SideBarService } from '../../services/providers/side-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  @HostBinding('class') cAppClass = 'c-app flex-row align-items-center';
  submitted: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private toasterService: ToastrService,
    private authservice: AuthService,
    private sideBarService: SideBarService,
    private router: Router
  ) {}

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authservice.login(this.loginForm.value).subscribe(
      (response: any) => {
        this.toasterService.success(response.message);
        this.authservice.setToken(response?.result?.token);
        this.sideBarService.reloadNaavigationMenu();
        this.router.navigate(["/dashboard"]);
      },
      (error: any) => {
        if(error.status == 401){
          this.toasterService.error("E-mail ou mot de passe incorrect.");
        }else{
          this.toasterService.error(error.error.message);
        }
      }
    );
  }

}
