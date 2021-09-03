import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Category, Product } from 'src/app/interfaces/interfaces';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsCategoryComponent } from 'src/app/components/products-category/products-category.component';
import { CategoriesService } from 'src/app/services/categories.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationService } from 'src/app/services/location.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  serverProcess: boolean = false;
  currentUserLocationIntents:number = 0;

  selecciondelroble:string= "https://carniceriaelroble.com/app/img/categories/elroble.png";

  //@ViewChild(IonContent, { static: false }) content: IonContent;
      categories: Category [] = [];
      categoriesElRoble: Category [] = [];
      categoriesElRobleNacional: Category [] = [];
      isLoading = true;
      
      constructor(
        private location:LocationService,
        private stripe: Stripe,
        private modalCtrl: ModalController,
        private productService: ProductsService,
        private categoryService: CategoriesService,
        public loadingController: LoadingController,
        public alertController: AlertController,
        private locationAccuracy: LocationAccuracy,
        private geolocation: Geolocation,    
        private androidPermissions: AndroidPermissions
        ) {}


        ionViewWillEnter(){
        this.serverProcess = true;
        if(this.location.getCurrentUserLocation() == ""){
          this.checkPermission();
        }else{
          this.getCategories(this.location.getCurrentUserLocation());
        }

      }


      getCategories(type:string){
        this.location.setCurrentUserLocation(type);
        this.serverProcess = true;
        this.isLoading = true;
        this.categories = [];
        this.categoriesElRoble = [];
        this.categoriesElRobleNacional = [];
        if(type=="Delicias"){
          this.categoryService.getCategories()
          .subscribe(response => {
            this.categories.push(...response.data);
            //ElRobleCategory
            this.categoryService.getCategoriesElRoble()
            .subscribe(response => {
              this.categoriesElRoble.push(...response.data);
            })
            setTimeout(()=>{  
              this.isLoading = false;
              this.serverProcess = false;
            }, 500);
          })
          console.log(this.categories);
        }else{ 
          //ElRobleCategory
          this.categoryService.getCategoriesElRoble()
          .subscribe(response => {
            this.categoriesElRobleNacional.push(...response.data);
          })
          setTimeout(()=>{  
            this.isLoading = false;
            this.serverProcess = false;
          }, 500);

          console.log(this.categories);
        }
      }





    async openProductsCategory(ID_Category){
        console.log(ID_Category);
        const modal = await this.modalCtrl.create({
          component: ProductsCategoryComponent,
          componentProps: { ID_Category: ID_Category },
          id:"ProductsCategoryComponent" 
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

















    
      checkPermission() {
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
            this.presentAlert("checkPermission Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");    
            this.getCategories("Nacional");
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
                  this.presentAlert("locationAccPermission Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");    
                  this.getCategories("Nacional");
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
            this.presentAlert("enableGPS Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");    
            this.getCategories("Nacional");
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
                this.presentAlert("Exito", "Tu ubicacion actual en Delicias te permite comprar de todos los productos disponibles para envios locales y nacionales.");   
                this.getCategories("Delicias");
              }else{
                this.getCategories("Nacional");
                this.presentAlert("Exito", "Tu ubicacion actual te permite comprar productos disponibles para envios nacionales"); 
              }
              this.serverProcess = false;
            })

         }).catch((error) => {
          this.presentAlert("currentLocPosition Error", error);
           this.presentAlert("currentLocPosition Error", "No pudimos acceder a tu ubicación, te mostraremos los productos disponibles a nivel nacional, para ver todos los productos disponibles enciende tu gps");    
           this.getCategories("Nacional");
         });
      }











      async presentAlertConfirm() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Activar GPS',
          message: '¿Quieres ver el catalogo de productos de acuerdo a tu ubicación?',
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

















      
}
