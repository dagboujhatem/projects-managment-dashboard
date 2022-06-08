import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private projectService: ProjectService,
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
    this.loadProjectDetails();
  }

  loadProjectDetails(){
    this.projectService.getProjectById(this.projectId).subscribe(
      (response:any) => { 
        this.projectForm.patchValue(response.result); 
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
        this.router.navigate(['/projects'])
       },
      (error:any) => { });
  }

}
