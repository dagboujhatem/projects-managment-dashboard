import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../../../services/api/country.service';
import { ProjectService } from '../../../../services/api/project.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  projectForm: FormGroup;
  submitted = false;
  projectId: any;
  countries = [];
  constructor(private projectService: ProjectService,
    private countryService:CountryService,
    private toasterService: ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id']
    this.projectForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      state: new FormControl('IN_PROGRESS', [Validators.required]),
      pays: new FormControl('TUN', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
    this.getAllCountries();
    this.loadProjectDetails();
  }

  getAllCountries(){
    this.countryService.getAllCountries().subscribe(
      (response: any) => { this.countries = response?.result; },
      (error:any) => { });
  }

  loadProjectDetails(){
    this.projectService.getProjectById(this.projectId).subscribe(
      (response:any) => { 
        const patch = response.result;
        patch['pays'] = response.result.pays.id;
        this.projectForm.patchValue(patch); 
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectForm.invalid) {
        return;
    }
    this.projectService.updateProjectById(this.projectId, this.projectForm.value).subscribe(
      (response:any) => {
        this.toasterService.success(response.message);
        this.router.navigate(['/projects'])
       },
      (error:any) => { 
        this.toasterService.error("Erreur", error.error.message);
      });
  }

}
