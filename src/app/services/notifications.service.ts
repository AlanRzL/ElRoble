import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserNotificationsResponse } from '../interfaces/interfaces';

const URL = 'https://carniceriaelroble.com/app/controllers';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  getNotifications(ID_User){
   return this.http.get<UserNotificationsResponse>(`${URL}/service_notifications.php?action=listAllByUserID&ID_User=${ID_User}`);
  }

 
}
