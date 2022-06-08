import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconModule,
} from '@coreui/icons-angular';
import { TachesRoutingModule } from './taches-routing.module';
import { TachesComponent } from './components/taches/taches.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    TachesComponent,
    UpdateComponent,
    CreateComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    TachesRoutingModule,
    ReactiveFormsModule,
    IconModule,
  ]
})
export class TachesModule { }
