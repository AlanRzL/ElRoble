import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderHistoryResponse, OrderModel, OrderResponse, ResponseProduct } from '../interfaces/interfaces';
import { map } from 'rxjs/operators'

const URL = 'https://carniceriaelroble.com/app/controllers';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getProducts(){
   return this.http.get<ResponseProduct>(`${URL}/service_products.php?action=listAll`);
  }


  getProductsByCategoryID(ID_Category){
    return this.http.get<ResponseProduct>(`${URL}/service_products.php?action=listAllByCategoryID&ID_Category=${ID_Category}`);
   }


   postOrder(order:OrderModel){
     console.log(order);
    return this.http.post<OrderResponse>(
      `${URL}/service_orders.php?action=create`, order,
      {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    ).pipe( map( resp=>{ 
       return resp;
      })
    )//pipe
  } 

  getOrdersHistory(ID_User:number){
    return this.http.get<OrderHistoryResponse>(`${URL}/service_orders.php?action=listAllByUserID&ID_User=${ID_User}`);
   }


  /*getWorksByID_Work(ID_Work:Number){
    return this.http.get<ResponseProduct>(`${URL}/get_works.php?ID_Work=${ID_Work}`);
   }
  
   getWorksByCategory(Category:String){
    return this.http.get<ResponseProduct>(`${URL}/get_works.php?Category=${Category}`);
   }*/



  /**
   * Local functions
   */
  setLocalOrder(LocalOrder:any){
    LocalOrder = JSON.stringify( LocalOrder );
    localStorage.setItem('LocalOrder', LocalOrder);
  }

  getLocalOrder(){
    let LocalOrder =  JSON.parse(localStorage.getItem('LocalOrder'));
    if(LocalOrder){
      return LocalOrder;
    }else{
      this.setLocalOrder([]);
      return JSON.parse(localStorage.getItem('LocalOrder'));
    }
  }

  getLocalOrderString(){
    return localStorage.getItem('LocalOrder');
  }


}
