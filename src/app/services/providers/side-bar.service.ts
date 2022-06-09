import { Injectable } from '@angular/core';
import { INavData } from '@coreui/angular';
import { ReplaySubject } from 'rxjs';
import { navItems } from '../../containers/default-layout/_nav';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  private allNavigationItems: INavData[] = navItems;
  public navItems: ReplaySubject<INavData[]> = new ReplaySubject();
  private role : String;

  constructor(private authService:AuthService) {
    this.reloadNaavigationMenu();
  }
  
  public reloadNaavigationMenu()
  {
    console.log(this.authService.getAuthRole());
    this.role = this.authService.getAuthRole();
    this.navItems.next(this.getNavItemsByRole()); 
  }
  private getNavItemsByRole(): INavData[] {
    const isManager = this.role == "ROLE_MANAGER";
    const isChefEquipe = this.role == "ROLE_CHEF_EQUIPE";
    const isAgent = this.role == "ROLE_AGENT";
    // filter menu side bar by role 
    if(isManager)
    {
      return this.allNavigationItems.filter((item) => {
        return item.url === '/dashboard' || 
               item.name === 'Menu' || 
               item.url === '/projects' || 
               item.url === '/chef-equipe';
      });
    }
    else if (isChefEquipe){
      return this.allNavigationItems.filter((item) => {
        return item.url === '/dashboard' || 
               item.name === 'Menu' || 
               item.url === '/agents' || 
               item.url === '/taches/projects';
      });
    } else if (isAgent){
      return this.allNavigationItems.filter((item) => {
        return item.url === '/dashboard' || 
               item.name === 'Menu' || 
               item.url === '/taches/projects';
      });
    } else {
      return [];
    }
  }

}
