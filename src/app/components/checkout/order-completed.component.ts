import { Component, OnInit } from '@angular/core';
//import { Stripe } from '@ionic-native/stripe/ngx';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { UserModel } from 'src/app/interfaces/interfaces';
import { Tab3Page } from 'src/app/pages/tab3/tab3.page';
import { SessionService } from 'src/app/services/session.service';

declare var Stripe;

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.scss'],
})
export class OrderCompletedComponent implements OnInit {

  stripe = Stripe('pk_test_51H78EyJsj5b49qDk7Z6zTjTl4Vso5bMAves3g6vgbMmskLvgqmmmGJ2YVP2UGb9dp42c4Oklj5wk9gK7sDcPdWWG00Sc4BVcPC');
  card: any; 
  elements: any;
  img: "https://eventserp.com/elroble/img/splash_500.png";
  user = new UserModel();

  constructor(
    private sessionService: SessionService,
    public navController: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.user = this.sessionService.getLocalUser();
  }

  async openHistoryPage(){
    this.modalCtrl.dismiss(null, null, "OrderCompletedComponent");
    this.navController.navigateRoot('/tabs/tab2');
  } 


  closeModal(){
        this.modalCtrl.dismiss();
  }
}
