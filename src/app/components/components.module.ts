import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PipesModule } from '../pipes/pipes.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LoginComponent } from './login/login.component';
import { OrderCompletedComponent } from './checkout/order-completed.component';

@NgModule({
  entryComponents:[
    OrderCompletedComponent,
    LoginComponent,
    StartComponent,
    ProductComponent,
    ProductsComponent,
    ProductsCategoryComponent,
    ProductDetailsComponent,
    OrderDetailsComponent
  ],
  declarations: [
    OrderCompletedComponent,
    LoginComponent,
    StartComponent,
    ProductComponent,
    ProductsComponent,
    ProductsCategoryComponent,
    ProductDetailsComponent,
    OrderDetailsComponent
  ],
  exports: [
    OrderCompletedComponent,
    LoginComponent,
    StartComponent,
    ProductComponent,
    ProductsComponent,
    ProductsCategoryComponent,
    ProductDetailsComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
