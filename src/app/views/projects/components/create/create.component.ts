import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../../../services/api/country.service';
import { ProjectService } from '../../../../services/api/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  projectForm: FormGroup;
  submitted = false;
  countries = [];
  constructor(private projectService: ProjectService,
    private toasterService: ToastrService,
    private countryService:CountryService,
    private router:Router) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      state: new FormControl('IN_PROGRESS', [Validators.required]),
      pays: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
    this.getAllCountries();
  }

  getAllCountries(){
    this.countryService.getAllCountries().subscribe(
      (response: any) => { this.countries = response?.result; },
      (error:any) => { });
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectForm.invalid) {
        return;
    }
    this.projectService.createProject(this.projectForm.value).subscribe(
      (response:any) => {
        this.toasterService.success(response.message);
        this.router.navigate(['/projects'])
       },
      (error:any) => {
        this.toasterService.error("Erreur", error.error.message);
      });
  }

}
