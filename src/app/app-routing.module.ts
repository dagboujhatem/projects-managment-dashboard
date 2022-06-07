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
      {
        path: 'operator-dashboard',
        loadChildren: () =>
          import('./views/operator-dashboard/operator-dashboard.module').then(
            (m) => m.OperatorDashboardModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/chartjs/chartjs.module').then((m) => m.ChartjsModule),
      },
      {
        path: 'editors',
        loadChildren: () =>
          import('./views/editors/editors.module').then((m) => m.EditorsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'google-maps',
        loadChildren: () =>
          import('./views/maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'plugins',
        loadChildren: () =>
          import('./views/plugins/plugins.module').then((m) => m.PluginsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./views/tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./views/apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'operator-dashboard',
        loadChildren: () =>
          import('./views/operator-dashboard/operator-dashboard.module').then(
            (m) => m.OperatorDashboardModule
          ),
      },
      { path: 'chef-equipe', loadChildren: () => import('./views/chef-equipe/chef-equipe.module').then(m => m.ChefEquipeModule) },
      { path: 'agents', loadChildren: () => import('./views/agents/agents.module').then(m => m.AgentsModule) },
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
