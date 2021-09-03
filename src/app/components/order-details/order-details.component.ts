import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { OrderResponse } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {

 
  @Input() Order: OrderResponse;
  
  Photo1:string= "https://eventserp.com/elroble/img/1.png";

  constructor(
    private modalCtrl: ModalController,
    private navController: NavController) { }

  ngOnInit() {}
  ionViewWillEnter(){
   console.log(this.Order);
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }



}
