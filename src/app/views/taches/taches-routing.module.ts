import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { TachesComponent } from './components/taches/taches.component';

const routes: Routes = [
  { path: '', component: TachesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachesRoutingModule { }
