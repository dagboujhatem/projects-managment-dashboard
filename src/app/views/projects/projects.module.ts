import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconModule,
} from '@coreui/icons-angular';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    IconModule,
  ]
})
export class ProjectsModule { }
