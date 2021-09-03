import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalToastsService {

  constructor(
    private toastController: ToastController
    ) { }



  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      animated: true,
      duration: 2000
    });
    toast.present();
  }
}
