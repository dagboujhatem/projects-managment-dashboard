import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/api/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  userId:any;
  constructor(private userService: UsersService,
    private toasterService: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [])
    });
    this.userForm.get("password").valueChanges.subscribe(newValue => {
      if(newValue !== '')
      {
        this.userForm.get("password").setValidators([Validators.required, Validators.minLength(6)])
      }else{
        this.userForm.get("password").setValidators([]);
      }
   })
    this.loadUserDetails();
  }
  
  loadUserDetails(){
    this.userService.getUserProfile().subscribe(
      (response:any) => { 
        response.result['password']= '';
        this.userForm.patchValue(response.result); 
      }
    );
  }
  
  onSubmit(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    this.userService.updateUserProfile(this.userForm.value).subscribe(
      (response:any) => {
        this.toasterService.success(response.message);
        this.router.navigate(['/dashboard'])
      },
      (error:any) => {
        this.toasterService.error("Erreur", error.error.message);
      });
  }

}
