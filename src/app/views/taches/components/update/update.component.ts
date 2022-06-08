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
  taskForm: FormGroup;
  submitted = false;
  projectId:any;
  taskId:any;
  constructor(private projectService: ProjectService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id']
    this.taskId = this.activatedRoute.snapshot.params['idTask']
    this.taskForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      libelle: new FormControl('', [Validators.required]),
    });
    this.loadTaskData();
  }
  loadTaskData() {
    this.projectService.getProjectById(this.taskId).subscribe(
      (response:any) => { 
        this.taskForm.patchValue(response.result); 
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.taskForm.invalid) {
        return;
    }
    this.projectService.createProject(this.taskForm.value).subscribe(
      (response:any) => {
        this.router.navigate(['/taches/project', this.projectId])
       },
      (error:any) => { });
  }
}
