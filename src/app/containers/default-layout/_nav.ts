import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Gestion des chef d\'équipe',
    url: '/chef-equipe',
    icon: 'cil-people'
  },
  {
    name: 'Gestion des agents',
    url: '/agents',
    icon: 'cil-people'
  },
  {
    name: 'Gestion des projets',
    url: '/projects',
    icon: 'cil-list'
  },
  {
    name: 'Gestion des tâches',
    url: '/taches/projects',
    icon: 'cil-tags'
  }
];
