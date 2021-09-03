import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/login/login.component';
import { OrderDetailsComponent } from 'src/app/components/order-details/order-details.component';
import { UserModel } from 'src/app/interfaces/interfaces';
import { LocalToastsService } from 'src/app/services/local-toasts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 
  ordersHistoryArray:any = [];
  serverProcess: boolean = false;
  user = new UserModel();

  Photo1:string= "https://carniceriaelroble.com/app/img/splash_500.png";


  constructor(  
    private modalCtrl: ModalController,
    private sessionService: SessionService,
    private ordersService: OrdersService,
    private localToastsController: LocalToastsService, 
    private alertController: AlertController) {

  }
  ionViewWillEnter(){
    this.validateUserSession();
  }


  validateUserSession(){
    this.serverProcess = true;
    setTimeout(()=>{  
      this.user = this.sessionService.getLocalUser();
      this.serverProcess = false;
      if(this.user){
        this.getOrdersHistory();
      }
      console.log(this.user);
    }, 500);
 }




  getOrdersHistory(){
    this.serverProcess = true;
    this.ordersService.getOrdersHistory(this.user.ID_User).subscribe( resp =>{
      setTimeout(()=>{  
        this.serverProcess = false;
        if(resp.statusID == 200){
          this.ordersHistoryArray = resp.data;
          console.log(this.ordersHistoryArray);
        }else{
          this.ordersHistoryArray = [];
          this.presentAlert(resp.statusName,resp.statusDescription);
        }
      }, 250);
    });
  }




  async showOrderDetails(order){
    const modal = await this.modalCtrl.create({
      component: OrderDetailsComponent,
      componentProps: { Order: order },
      id:"OrderDetailsComponent" 
    });
    modal.present();  
    const data  = await modal.onWillDismiss();
  } 


  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



  async openLoginComponent(){
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      id:"LoginComponent" 
    });

    modal.onDidDismiss().then((data) => {
      console.log(data);
      if(data.data == "refresh"){
        this.validateUserSession();
      }
    });

    modal.present();  
    const data  = await modal.onWillDismiss();
    /*if(data.data != "null"){
      this.checkSession();
    }*/
  } 



}
