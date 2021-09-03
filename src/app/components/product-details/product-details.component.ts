import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { LocalOrder, Product } from 'src/app/interfaces/interfaces';
import { LocalToastsService } from 'src/app/services/local-toasts.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent  {

  @Input() Product: Product;
  orderProductsArray = [];
  Photo:string= "https://i1.wp.com/prime-13.com/wp-content/uploads/2019/10/36848073_s.jpg";
  productQty:number = 1;
  productTotal:number = 0;



  constructor(
    private modalCtrl: ModalController,
    private navController: NavController,
    private ordersService: OrdersService,
    private localToastsController: LocalToastsService
    ) {}

    ionViewWillEnter(){
      if(this.ordersService.getLocalOrder()){
        this.orderProductsArray = this.ordersService.getLocalOrder();
        console.log(this.orderProductsArray);
      }
    }
  

  closeModal(){
    this.modalCtrl.dismiss();
  }

  add(){
    this.productQty += 1;
  }

  remove(){
    if(this.productQty > 1){ this.productQty -= 1; }
  }


  addNewProduct(){
    //console.log(this.name,this.empoloyeeID);
    let newProduct = new LocalOrder();
    newProduct.ID_Product = this.Product.ID_Product;
    newProduct.Name = this.Product.Name;
    newProduct.Photo = this.Product.Image;
    newProduct.Unit = this.Product.Unit;
    newProduct.Price = Number(this.Product.Price);
    newProduct.Qty = Number(this.productQty);
    newProduct.Total = Number(this.productQty) * Number(this.Product.Price);
    this.orderProductsArray.push(newProduct);
    this.ordersService.setLocalOrder(this.orderProductsArray);
    this.localToastsController.presentToast('El producto '+ this.Product.Name + ' fue agregado al carrito');
  }

  async goToCart(){
    this.modalCtrl.dismiss(null, null, "ProductDetailsComponent");
    this.modalCtrl.dismiss(null, null, "ProductsCategoryComponent");
    this.navController.navigateRoot('/tabs/tab3');
  }

  





}
