import { Injectable } from '@angular/core';
import {SweetAlertService} from 'angular-sweetalert-service';

@Injectable({
  providedIn: 'root'
})
export class SweetAlert {

  constructor(private alertService: SweetAlertService) { }

  confirmDeleteMessage(){
    const options = {
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous vraiment supprimer cette enregistrement?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4dbd74',
      cancelButtonColor: '#f86c6b',
      confirmButtonText: '<i class="fa fa-check" aria-hidden="true"></i> Oui, supprimez-le',
      cancelButtonText: '<i class="fa fa-times" aria-hidden="true"></i> Non, annuler'
    };
   return this.alertService.confirm(options);
  }
}
