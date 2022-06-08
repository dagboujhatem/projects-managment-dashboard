import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../../../services/api/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  projectForm: FormGroup;
  submitted = false;
  constructor(private projectService: ProjectService,
    private router:Router) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      state: new FormControl('IN_PROGRESS', [Validators.required]),
      pays: new FormControl('TUN', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.projectForm.invalid) {
        return;
    }
    this.projectService.createProject(this.projectForm.value).subscribe(
      (response:any) => {
        this.router.navigate(['/projects'])
       },
      (error:any) => { });
  }

}
