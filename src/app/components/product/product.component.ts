import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
//import { ServiceDetailsComponent } from '../service-details/service-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product={};

  constructor(private modalCtrl: ModalController){}

  ngOnInit() {}


  async showDetails(product: any){
    console.log(this.product);
    /*const modal = await this.modalCtrl.create({
      component: ServiceDetailsComponent,
      componentProps: {
        product
      }
    });
    modal.present();*/
  }




}
