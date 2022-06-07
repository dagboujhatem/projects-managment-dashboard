import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefEquipeComponent } from './components/chef-equipe/chef-equipe.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: '', component: ChefEquipeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefEquipeRoutingModule { }
