import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/api/users.service';
// import { SweetAlert } from '../../services/providers/sweet-alert.service';

@Component({
  selector: 'app-chef-equipe',
  templateUrl: './chef-equipe.component.html',
  styleUrls: ['./chef-equipe.component.scss']
})
export class ChefEquipeComponent implements OnInit {
  userData = [];
  constructor(private userService: UsersService,
    /*private sweetAlertService: SweetAlert*/) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (response: any) => { this.userData = response?.result; },
      (error) => { });
  }

  deleteUser(userId) {
    // this.sweetAlertService.confirmDeleteMessage().then((result) => {
    //   // delete the user from rest api
    //   this.userService.deleteUserById(userId).subscribe(
    //     (response: any) => { this.getAllUsers(); },
    //     (error) => { });
    // }).catch(() => { });
  }

}
