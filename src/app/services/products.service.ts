import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseProduct } from '../interfaces/interfaces';

const URL = 'https://carniceriaelroble.com/app/controllers';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
   return this.http.get<ResponseProduct>(`${URL}/service_products.php?action=listAll`);
  }


  getProductsByCategoryID(ID_Category){
    return this.http.get<ResponseProduct>(`${URL}/service_products.php?action=listAllByCategoryID&ID_Category=${ID_Category}`);
   }


  /*getWorksByID_Work(ID_Work:Number){
    return this.http.get<ResponseProduct>(`${URL}/get_works.php?ID_Work=${ID_Work}`);
   }
  
   getWorksByCategory(Category:String){
    return this.http.get<ResponseProduct>(`${URL}/get_works.php?Category=${Category}`);
   }*/
}
