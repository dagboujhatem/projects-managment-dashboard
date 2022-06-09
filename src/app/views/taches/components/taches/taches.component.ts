import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../services/api/task.service';
import { SweetAlertService } from '../../../../services/providers/sweet-alert.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {
  taskData = [];
  projectId:any;
  constructor(private taskService: TaskService,
    private sweetAlertService: SweetAlertService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id']
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks(this.projectId).subscribe(
      (response: any) => { this.taskData = response?.result; },
      (error:any) => { });
  }

  deleteTask(taskId:any) {
    this.sweetAlertService.confirmDeleteMessage().then((result) => {
      if (result.value) {
        // delete the task from rest api
        this.taskService.deleteTaskById(taskId).subscribe(
          (response: any) => { this.getAllTasks(); },
          (error:any) => { 
            this.getAllTasks();
          });
      }
    }).catch((error:any) => { });
  }

}
