import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../../services/api/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  userId:any;
  constructor(private userService: UsersService,
    private toasterService: ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
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
    this.userService.getUserById(this.userId).subscribe(
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
    this.userService.updateUserById(this.userId, this.userForm.value).subscribe(
      (response:any) => {
        this.toasterService.success(response.message);
        this.router.navigate(['/chef-equipe'])
      },
      (error:any) => {
        this.toasterService.error("Erreur", error.error.message);
      });
  }
}
