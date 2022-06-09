import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../../../services/api/users.service';
import { SweetAlertService } from '../../../../services/providers/sweet-alert.service';

@Component({
  selector: 'app-chef-equipe',
  templateUrl: './chef-equipe.component.html',
  styleUrls: ['./chef-equipe.component.scss']
})
export class ChefEquipeComponent implements OnInit {
  userData = [];
  constructor(private userService: UsersService,
    private toasterService: ToastrService,
    private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (response: any) => { this.filterChefEquipe(response?.result); },
      (error:any) => { });
  }

  filterChefEquipe(array:any){
    this.userData = array.filter(item=> item.role == 'ROLE_CHEF_EQUIPE');
  }

  deleteUser(userId:any) {
    this.sweetAlertService.confirmDeleteMessage().then((result) => {
      if (result.value) {
        // delete the user from rest api
        this.userService.deleteUserById(userId).subscribe(
          (response: any) => { 
            this.getAllUsers();
            this.toasterService.success(response.message);
          },
          (error:any) => {
            this.toasterService.error("Erreur", error.error.message);
          });
      }
    }).catch((error:any) => { });
  }

}
