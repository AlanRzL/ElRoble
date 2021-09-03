import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/interfaces';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit {

  @Input() ID_Category: any;
  ID_CategoryName:string;
  products: Product [] = [];
  isLoading = true;


  Photo1:string= "https://eventserp.com/elroble/img/1.png";
  Photo2:string= "https://eventserp.com/elroble/img/2.png";
  Photo3:string= "https://eventserp.com/elroble/img/3.png";
  Photo4:string= "https://eventserp.com/elroble/img/4.png";
  Photo5:string= "https://eventserp.com/elroble/img/5.png";
  Photo6:string= "https://eventserp.com/elroble/img/6.png";
  Photo7:string= "https://eventserp.com/elroble/img/7.png";
  Photo8:string= "https://eventserp.com/elroble/img/8.png";
  Photo9:string= "https://eventserp.com/elroble/img/9.png";




  constructor(
    private modalCtrl: ModalController,
    private navController: NavController,
    private productService: ProductsService,
    ) {

    }


  ngOnInit(){
    this.getProductsByCategoryID(this.ID_Category);
    //this.getProducts();
  }




  getProductsByCategoryID(ID_Category){
    this.isLoading = true;
    this.productService.getProductsByCategoryID(ID_Category)
    .subscribe(response => {
      this.products.push(...response.data);
      this.ID_CategoryName = this.products[0].ID_CategoryName;
      console.log(this.ID_CategoryName);
      this.isLoading = false;
    })
    console.log(this.products);
  }






  closeModal(){
    this.modalCtrl.dismiss();
  }


  async openProductDetails(Product:Product){
    const modal = await this.modalCtrl.create({
      component: ProductDetailsComponent,
      componentProps: { Product: Product },
      id: "ProductDetailsComponent"
    });
    modal.present();  
    const data  = await modal.onWillDismiss();
    /*if(data.data != "null"){
      this.checkSession();
    }*/
  } 


  async goToCart(){
    this.modalCtrl.dismiss(null, null, "ProductsCategoryComponent");
    this.navController.navigateRoot('/tabs/tab3');
  }



}
