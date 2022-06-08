import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/api/auth.service';

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
      Validators.minLength(8),
    ]),
  });

  constructor(
    private toasterService: ToastrService,
    private authservice: AuthService,
    private router: Router
  ) {}

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authservice.login(this.loginForm.value).subscribe(
      (response: any) => {
        // this.toasterService.success("Bienvenue", response.message);
        this.authservice.setToken(response?.result?.token);
        this.router.navigate(["/dashboard"]);
      },
      (error: any) => {
        this.toasterService.error("Erreur", error.error.message);
      }
    );
  }

}
