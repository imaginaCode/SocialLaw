import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(message : string, type: string)
  {
    const bsModelRef : BsModalRef = this.bsModalService.show(AlertasComponent);
    bsModelRef.content.type = type;
    bsModelRef.content.message = message;
  }

   showAlertDanger(message: string)
  {
    this.showAlert(message, 'danger')
  }

   showAlertSuccess(message: string)
  {
    this.showAlert(message, 'success')
  }

   showAlertInfo(message: string)
  {
    this.showAlert(message, 'info')
  }


}
