import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
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
    private toasterService: ToasterService,
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
        this.toasterService.pop("success", "Bienvenue", response.message);
        this.authservice.setToken(response.token);
        this.router.navigate(["/dashboard"]);
      },
      (error: any) => {
        this.toasterService.pop("error", "Erreur", error.error.message);
      }
    );
  }

}
