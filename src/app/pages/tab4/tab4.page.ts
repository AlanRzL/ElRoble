import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/login/login.component';
import { UserModel } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationService } from 'src/app/services/location.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  user = new UserModel();
  serverProcess: boolean = false;
  segmentValue = "profile";


  currentUserLocationIntents:number = 0;
  constructor(
    private navController: NavController,
    private authService:AuthService,
    private modalCtrl: ModalController,
    private sessionService: SessionService,
    public alertController: AlertController,
    private router:Router,
    private location:LocationService,
    private locationAccuracy: LocationAccuracy,
    private geolocation: Geolocation,    
    private androidPermissions: AndroidPermissions
    ) { 
  }

  ionViewWillEnter(){  
    console.log("ionViewWillEnter");
    this.validateUserSession();
  } 


 validateUserSession(){
    this.serverProcess = true;
    setTimeout(()=>{  
      this.user = this.sessionService.getLocalUser();
      this.serverProcess = false;
      if(this.user){
      }else{
        this.openLoginComponent();
      }
    }, 500);
 }








  updateUser(){
    this.serverProcess = true;
    this.sessionService.postUser(this.user, "update").subscribe( resp =>{
      console.log(resp);
      setTimeout(()=>{  
        this.serverProcess = false;
        if(resp.statusID == 200){
          this.presentAlert(resp.statusName,resp.statusDescription);
        }else{
          this.presentAlert(resp.statusName,resp.statusDescription);
        }
      }, 1500);
    });
  }





  userSegmentChanged(event){
    console.log(event.detail.value);
    this.segmentValue = event.detail.value;
  }



  async openLoginComponent(){
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      id:"LoginComponent" 
    });

    modal.onDidDismiss().then((data) => {
      console.log(data);
      if(data.data == "refresh"){
        this.validateUserSession();
      }
    });

    modal.present();  
    const data  = await modal.onWillDismiss();
    /*if(data.data != "null"){
      this.checkSession();
    }*/
  } 




 
  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Salir',
      message: '¿Seguro que desea cerrar su sesion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Salir',
          handler: () => {
            this.serverProcess = true;
            setTimeout(()=>{  
                this.authService.setAuth(false);
                this.sessionService.closeLocalUser();
                this.router.navigateByUrl('/start');
              
            }, 500);

            

          }
        }
      ]
    });

    await alert.present();
  }



  async presentAlertLocationConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Activar GPS',
      message: '¿Activa tu GPS para ver todos los producto y obtener envio gratis?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.serverProcess = true;
            setTimeout(()=>{  
              this.checkPermission();
            }, 500);
  
            
  
          }
        }
      ]
    });
  
    await alert.present();
  }




  checkPermission() {
    this.currentUserLocationIntents = this.currentUserLocationIntents + 1;
    console.log(this.currentUserLocationIntents);
    if (this.currentUserLocationIntents%2==0) {
      this.presentAlert("Modo de prueba", "Ubicacíon de prueba: Cd. Delicias");  
      this.location.setCurrentUserLocation("Delicias");
      this.serverProcess = false;
      return;
    }
  
  
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          this.enableGPS();
        } else {
          this.locationAccPermission();
        }
      },
      error => {
        //console.log("checkPermission Error", error);
        //this.presentAlert("checkPermission Error", error);
        this.presentAlert("checkPermission Error", "No pudimos acceder a tu ubicación,  si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");    
        this.location.setCurrentUserLocation("Nacional");
        this.serverProcess = false;
      }
    );
  }
  
  locationAccPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
      } else {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              this.enableGPS();
            },
            error => {
              //console.log("locationAccPermission Error", error);
              //this.presentAlert("locationAccPermission Error", error);
              this.presentAlert("locationAccPermission Error", "No pudimos acceder a tu ubicación, si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");    
              this.location.setCurrentUserLocation("Nacional");
              this.serverProcess = false;
            }
          );
      }
    });
  }
  
  enableGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        this.currentLocPosition()
      },
      error => {
        let stringifyError = JSON.stringify(error);
        //console.log("enableGPS Error", error);
       //this.presentAlert("enableGPS Error", stringifyError); 
        this.presentAlert("enableGPS Error", "No pudimos acceder a tu ubicación, si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");    
        this.location.setCurrentUserLocation("Nacional");
        this.serverProcess = false;
      }
    );
  }
  
  currentLocPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
       
      console.log(resp);
       resp.coords.latitude
       resp.coords.longitude
       this.location.getUserLocation(resp.coords.latitude, resp.coords.longitude)
        .subscribe(response => {
          console.log(response);
          if(response.statusID == 200){  
            this.location.setCurrentUserLocation("Delicias");
            this.presentAlert("Exito", "Tu ubicacion actual en de Cd. Delicias te da servicio a domicilio gratis"); 
          }else{
            this.location.setCurrentUserLocation("Nacional");
            this.presentAlert("Exito", "Tu ubicacion actual fuera de Cd. Delicias no cuenta con la promoción de envio gratis"); 
          }
          this.serverProcess = false;
        })
  
     }).catch((error) => {
      this.presentAlert("currentLocPosition Error", error);
       this.presentAlert("currentLocPosition Error", "No pudimos acceder a tu ubicación, si estas en Cd. Delicias enciende tu gps y tu envio sera gratis");    
       this.location.setCurrentUserLocation("Nacional");
       this.serverProcess = false;
     });
  }
  



















}
