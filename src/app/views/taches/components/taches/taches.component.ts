import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../../services/api/project.service';
import { SweetAlertService } from '../../../../services/providers/sweet-alert.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {
  taskData = [];
  projectId:any;
  constructor(private projectService: ProjectService,
    private sweetAlertService: SweetAlertService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id']
    this.getAllTasks();
  }

  getAllTasks() {
    this.projectService.getAllProjects().subscribe(
      (response: any) => { this.taskData = response?.result; },
      (error:any) => { });
  }

  deleteTask(taskId:any) {
    this.sweetAlertService.confirmDeleteMessage().then((result) => {
      if (result.value) {
        // delete the project from rest api
        this.projectService.deleteProjectById(taskId).subscribe(
          (response: any) => { this.getAllTasks(); },
          (error:any) => { });
      }
    }).catch((error:any) => { });
  }

}
