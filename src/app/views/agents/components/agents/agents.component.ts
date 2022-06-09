import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../../services/api/users.service';
import { SweetAlertService } from '../../../../services/providers/sweet-alert.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  userData = [];
  constructor(private userService: UsersService,
    private toasterService: ToastrService,
    private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (response: any) => { this.filterAgents(response?.result); },
      (error:any) => { });
  }

  filterAgents(array:any){
    this.userData = array.filter(item=> item.role == 'ROLE_AGENT');
  }

  deleteUser(userId:any) {
    this.sweetAlertService.confirmDeleteMessage().then((result) => {
      if (result.value) {
        // delete the user from rest api
        this.userService.deleteUserById(userId).subscribe(
          (response: any) => {
            this.toasterService.success(response.message);
            this.getAllUsers(); 
          },
          (error:any) => {
            this.toasterService.error(error.error.message);
          });
      }
    }).catch((error:any) => { });
  }

}
