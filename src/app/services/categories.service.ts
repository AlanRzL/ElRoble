import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseCategory } from '../interfaces/interfaces';

const URL = 'https://carniceriaelroble.com/app/controllers';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(){
   return this.http.get<ResponseCategory>(`${URL}/service_categories.php?action=listAll`);
  }

  getCategoriesElRoble(){
    return this.http.get<ResponseCategory>(`${URL}/service_categories.php?action=listAllElRoble`);
   }
 
  /*getWorksByID_Work(ID_Work:Number){
    return this.http.get<ResponseProduct>(`${URL}/get_works.php?ID_Work=${ID_Work}`);
   }
  
   getWorksByCategory(Category:String){
    return this.http.get<ResponseProduct>(`${URL}/get_works.php?Category=${Category}`);
   }*/
}
