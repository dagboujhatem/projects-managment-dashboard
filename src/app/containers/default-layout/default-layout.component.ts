import { Component, HostBinding } from '@angular/core';
import { SideBarService } from '../../services/providers/side-bar.service';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  @HostBinding('class.c-app') cAppClass = true;

  public navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private sideBarService: SideBarService) {
    this.navItems = this.sideBarService.navItems;
  }
}
