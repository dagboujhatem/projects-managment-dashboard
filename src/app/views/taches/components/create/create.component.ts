import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../../../services/api/task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  taskForm: FormGroup;
  submitted = false;
  projectId:any;
  constructor(private taskService: TaskService,
    private toasterService: ToastrService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id']
    this.taskForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      libelle: new FormControl('', [Validators.required]),
      project: new FormControl(this.projectId, [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.taskForm.invalid) {
        return;
    }
    this.taskService.createTask(this.taskForm.value).subscribe(
      (response:any) => {
        this.toasterService.success(response.message);
        this.router.navigate(['/taches/project', this.projectId])
       },
      (error:any) => {
        this.toasterService.error(error.error.message);
      });
  }

}
