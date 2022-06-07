import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefEquipeRoutingModule } from './chef-equipe-routing.module';
import { ChefEquipeComponent } from './chef-equipe.component';


@NgModule({
  declarations: [
    ChefEquipeComponent
  ],
  imports: [
    CommonModule,
    ChefEquipeRoutingModule
  ]
})
export class ChefEquipeModule { }
