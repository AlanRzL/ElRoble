import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LocalOrder, OrderModel, UserModel } from 'src/app/interfaces/interfaces';
import { LocalToastsService } from 'src/app/services/local-toasts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { StripeService } from 'src/app/services/stripe.service';
import { OrderCompletedComponent } from 'src/app/components/checkout/order-completed.component';
import { LocationService } from 'src/app/services/location.service';

declare var Stripe;



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  localUser:any;
  user = new UserModel();
  order = new OrderModel();
  serverProcess: boolean = false;
  currentUserLocationIntents:number = 0;
  orderProductsArray:any = [];
  totalProductsOrderPrice = 0;
  totalShipping = 0;
  totalOrderPrice = 0;

  /**Stripe */
  stripeOrderStep = 1;
  stripe = Stripe('pk_test_51H78EyJsj5b49qDk7Z6zTjTl4Vso5bMAves3g6vgbMmskLvgqmmmGJ2YVP2UGb9dp42c4Oklj5wk9gK7sDcPdWWG00Sc4BVcPC');
  card: any; 
  elements: any;
  /**Stripe */


 


  constructor(
    private stripeService: StripeService,
    private ordersService: OrdersService,
    private authService:AuthService,
    private sessionService: SessionService,
    private localToastsController: LocalToastsService, 
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private router:Router,
    private location:LocationService,) {



    }

  ionViewWillEnter(){
    this.stripeOrderStep = 1;
    console.log("ionViewWillEnter");
    this.validateUserSession();
  }


  validateUserSession(){
    this.serverProcess = true;
    setTimeout(()=>{  
      this.orderProductsArray = this.ordersService.getLocalOrder();
      this.localUser = this.sessionService.getLocalUser()
      if(this.localUser){
        this.user = this.sessionService.getLocalUser();
      }
      this.calculateTotalPrice();
      this.serverProcess = false;
    }, 500);
  }






  remove(item){
    let index = this.orderProductsArray.indexOf(item);
    if(item.Qty > 1){
      item.Qty = item.Qty - 1;
      item.Total = item.Qty * item.Price;
      this.orderProductsArray[index] = item;
      this.calculateTotalPrice();
    }
  }

  add(item){
    let index = this.orderProductsArray.indexOf(item);
    item.Qty = item.Qty + 1;
    item.Total = item.Qty * item.Price;
    this.orderProductsArray[index] = item;
    this.calculateTotalPrice();
  }

  delete(item){
    let index = this.orderProductsArray.indexOf(item);
    this.orderProductsArray.splice(index, 1);
    this.calculateTotalPrice();
    this.localToastsController.presentToast("Producto eliminado");
  }



  calculateTotalPrice() {
    this.totalProductsOrderPrice = 0;
    this.orderProductsArray.forEach( (product, index) => {
      this.totalProductsOrderPrice = this.totalProductsOrderPrice + product.Total
    });

    if(this.location.getCurrentUserLocation() == "Delicias"){
      console.log(this.location.getCurrentUserLocation(), "0 de envio");
      this.totalShipping = 0;
    }else{
      console.log(this.location.getCurrentUserLocation(), "+500 de envio")
      if(this.totalProductsOrderPrice > 0){
        this.totalShipping = 500;
      }else{
        this.totalShipping = 0;
      }
    }
    
    this.totalOrderPrice = this.totalProductsOrderPrice + this.totalShipping;
    this.ordersService.setLocalOrder(this.orderProductsArray);


    setTimeout(()=>{  
      this.serverProcess = false;
    }, 500);
}








  goToPay(){
      if(this.localUser){
        this.presentAlertConfirmPay();
      }else{
        this.openLoginComponent();
      }
  }




async presentAlertConfirmPay() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Generar orden',
    message: 'Es necesario contar con tarjeta de debito o credito, ¿desea continuar?',
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
          this.setupStripe();
        }
      }
    ]
  });

  await alert.present();
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




  async openOrderCompletedComponent(){
    const modal = await this.modalCtrl.create({
      component: OrderCompletedComponent,
      id:"OrderCompletedComponent" 
    });

    modal.present();  
  } 














  setupStripe(){
    console.log("setupStripe");
    this.serverProcess = true;
    this.stripeOrderStep = 2;

    setTimeout(()=>{  
            this.serverProcess = false;

    
            /** Original STRIPE  */
            this.elements = this.stripe.elements();
            var style = {
              base: {
                color: '#303238',
                fontSize: '16px',
                fontFamily: '"Open Sans", sans-serif',
                fontSmoothing: 'antialiased',
                '::placeholder': {
                  color: '#CFD7DF',
                },
              },
              invalid: {
                color: '#e5424d',
                ':focus': {
                  color: '#303238',
                },
              },
            };



            this.card = this.elements.create('card', { style: style });

            this.card.mount("#card-element");

            this.card.addEventListener('change', event => {
              var displayError = document.getElementById('card-errors');
              if (event.error) {
                displayError.textContent = event.error.message;
              } else {
                displayError.textContent = '';
              }
            });

            var buttonPayNowToStripe = document.getElementById('payNowToStripe');
            buttonPayNowToStripe.addEventListener('click', event => {
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = "";
              event.preventDefault();
              this.serverProcess = true;
              // this.stripe.createToken(this.card)
              this.stripe.createToken(this.card).then(result => {
                
                if (result.error) {
                  var errorElement = document.getElementById('card-errors');
                  errorElement.textContent = result.error.message;
                  this.serverProcess = false;
                } else {



                    this.totalOrderPrice = this.totalProductsOrderPrice + this.totalShipping;
                    this.totalOrderPrice = parseFloat(this.totalOrderPrice.toFixed(2));

                    try{
                          this.serverProcess = true;
                          var clientSecret = this.stripeService.getToken(this.totalOrderPrice).subscribe( resp =>{
                            console.log(resp);
                            setTimeout(()=>{  
                              this.serverProcess = false;
                              if(resp.statusID == 200){
                                this.payWithCard(this.stripe, this.card, resp.clientSecret);
                              }else{
                                this.presentAlert(resp.statusName,resp.statusDescription);
                              }
                            }, 1500);
                          });

                    }catch(error) {
                      this.serverProcess = false;
                      this.presentAlert("Error",error);
                    }




                  console.log(result);
                }
              });
            });

  }, 1000);//setTimeout(()=>{ 





  }



  async payWithCard(stripe, card, clientSecret){
    try {

      
    this.serverProcess = true;
    this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
         name: this.user.Name,
         email: this.user.Email,
         phone: this.user.Phone,
         address: {
            line1: this.user.Address + this.user.AddressColone + this.user.AddressZipCode,
            city: this.user.AddressCity,
            state: this.user.AddressState,
            country: 'MX' 
          },
        },
      }
    }).then(result => {
      this.serverProcess = false;
      if (result.error) {
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
        // Show error to your customer
        //showError(result.error.message);
      } else {
        // The payment succeeded!
        console.log(result.paymentIntent.id);
        this.createOrderInDB(result.paymentIntent.id);
      }

    })

   }catch(error) {
    this.serverProcess = false;
    this.presentAlert("Error",error);
   }




}


createOrderInDB(StripeID:string){
  this.serverProcess = true;

  this.order.ID_User = this.user.ID_User;
  this.order.Name = this.user.Name;
  this.order.Phone = this.user.Phone;
  this.order.Email = this.user.Email;
  this.order.Address = this.user.Address;
  this.order.AddressColone = this.user.AddressColone;
  this.order.AddressZipCode = this.user.AddressZipCode;
  this.order.AddressState = this.user.AddressState;
  this.order.AddressCity = this.user.AddressCity;
  this.order.orderProductsArray = this.ordersService.getLocalOrderString();
  this.order.StripeID = StripeID;

  this.ordersService.postOrder(this.order).subscribe( resp =>{
    console.log(resp);
    setTimeout(()=>{  
      this.serverProcess = false;
      if(resp.statusID == 200){
        localStorage.setItem('LocalOrder', "[]");
        this.validateUserSession();
        this.openOrderCompletedComponent();
      }else{
        this.presentAlert(resp.statusName,resp.statusDescription);
      }
    }, 1500);
  });


}






























}