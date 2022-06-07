import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconModule,
} from '@coreui/icons-angular';
import { ChefEquipeRoutingModule } from './chef-equipe-routing.module';
import { ChefEquipeComponent } from './components/chef-equipe/chef-equipe.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChefEquipeComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ChefEquipeRoutingModule,
    ReactiveFormsModule,
    IconModule
  ]
})
export class ChefEquipeModule { }
