import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header-dropdown-account',
  templateUrl: './default-header-dropdown-account.component.html',
})
export class DefaultHeaderDropdownAccountComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
