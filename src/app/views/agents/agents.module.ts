import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './components/agents/agents.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgentsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AgentsModule { }
