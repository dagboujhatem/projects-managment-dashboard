import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachesRoutingModule } from './taches-routing.module';
import { TachesComponent } from './taches.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';


@NgModule({
  declarations: [
    TachesComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    TachesRoutingModule
  ]
})
export class TachesModule { }
