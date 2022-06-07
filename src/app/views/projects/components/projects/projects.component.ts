import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/api/project.service';
import { SweetAlertService } from '../../../../services/providers/sweet-alert.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectData = []
  constructor(private projectService: ProjectService,
    private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe(
      (response: any) => { this.projectData = response?.result; },
      (error:any) => { });
  }

  deleteProject(projectId:any) {
    this.sweetAlertService.confirmDeleteMessage().then((result) => {
      if (result.value) {
        // delete the project from rest api
        this.projectService.deleteProjectById(projectId).subscribe(
          (response: any) => { this.getAllProjects(); },
          (error:any) => { });
      }
    }).catch((error:any) => { });
  }

}
