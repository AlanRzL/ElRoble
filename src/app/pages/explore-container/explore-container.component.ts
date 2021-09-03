
import { Router } from '@angular/router';
import { LocalToastsService } from 'src/app/services/local-toasts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { Component, ViewChild, Input } from '@angular/core';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent{

  @Input() name: string;
  orderProductsArray:any = [];
  totalOrderPrice = 0;


  //** Card */
  customerCardNumber: String;
  customerCardNumberMonth: String;
  customerCardNumberYear: String;
  customerCardNumberName: String;
  constructor(
    private ordersService: OrdersService,
    private localToastsController: LocalToastsService,
    private router:Router) {}

  
    ionViewWillEnter(){
      this.orderProductsArray = this.ordersService.getLocalOrder();
      console.log(this.orderProductsArray);
      this.calculateTotalPrice();
    }
  
  closeModal(){
    console.log("autenticado");
    this.router.navigateByUrl('/tabs/tab3');
  }
  

  calculateTotalPrice() {
    this.totalOrderPrice = 0;
    this.orderProductsArray.forEach( (product, index) => {
      this.totalOrderPrice = this.totalOrderPrice + product.Total
    });
    this.ordersService.setLocalOrder(this.orderProductsArray);
}





}
