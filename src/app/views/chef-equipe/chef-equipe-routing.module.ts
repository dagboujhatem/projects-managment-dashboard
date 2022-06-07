import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefEquipeComponent } from './chef-equipe.component';

const routes: Routes = [{ path: '', component: ChefEquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefEquipeRoutingModule { }
