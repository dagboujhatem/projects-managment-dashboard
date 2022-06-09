import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component
  },
  {
    path: '500',
    component: P500Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Tableau de bord',
    },
    children: [
      { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule) },
      { path: 'chef-equipe', loadChildren: () => import('./views/chef-equipe/chef-equipe.module').then(m => m.ChefEquipeModule) },
      { path: 'agents', loadChildren: () => import('./views/agents/agents.module').then(m => m.AgentsModule) },
      { path: 'profil', loadChildren: () => import('./views/profil/profil.module').then(m => m.ProfilModule) },
      { path: 'projects', loadChildren: () => import('./views/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'taches', loadChildren: () => import('./views/taches/taches.module').then(m => m.TachesModule) },
    ],
  },
  {
    path:'**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
