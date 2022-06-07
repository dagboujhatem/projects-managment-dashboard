import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [
    AgentsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
