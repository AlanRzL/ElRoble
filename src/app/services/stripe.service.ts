import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StrpieClientSecretResponse } from '../interfaces/interfaces';

const URL = 'https://carniceriaelroble.com/app/controllers';
@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http: HttpClient) { }

  getToken(orderTotal:number){
    return this.http.get<StrpieClientSecretResponse>(`${URL}/stripe_token.php?orderTotal=${orderTotal}`);
   }







  }




  