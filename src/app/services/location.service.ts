import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseUserLocationGoogleAPI } from '../interfaces/interfaces';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AlertController } from '@ionic/angular';

const URL = 'https://cabinafotograficapixel.eventserp.com/controllers';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  serverProcess: boolean = false;
  currentUserLocation: string = "";
  
  constructor(
    private http: HttpClient,
    private locationAccuracy: LocationAccuracy,
    private geolocation: Geolocation,    
    private androidPermissions: AndroidPermissions,
    public alertController: AlertController
    ) { }

  getUserLocation(lat:any, lng:any){
    return this.http.get<ResponseUserLocationGoogleAPI>(`${URL}/googleAPI.php?action=get&lat=${lat}&lng=${lng}`);
  }

  setCurrentUserLocation(currentUserLocation:string){
    this.currentUserLocation = currentUserLocation;
  }
  

  getCurrentUserLocation(){
    return this.currentUserLocation;
  }




}
