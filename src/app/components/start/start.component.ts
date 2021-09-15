import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {facebookLoginResponse, UserModel} from 'src/app/interfaces/interfaces';
import {AuthService} from 'src/app/services/auth.service';
import {SessionService} from 'src/app/services/session.service';
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook/ngx";
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  serverProcess: boolean = false;
  user = new UserModel();

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private router: Router,
    private readonly facebook: Facebook,
    private readonly alertController: AlertController
  ) {
  }

  ngOnInit() {

    this.user = this.sessionService.getLocalUser();
    console.log(this.user);
    if (this.user) {
      console.log("autenticado");
      this.authService.setAuth(true);
      this.router.navigateByUrl('/tabs/tab1');
    } else {
      console.log("no autenticado");
      this.authService.setAuth(false);
    }

  }


  async loginFacebook() {
    


    await this.facebook.logout();
    this.facebook.login(['email','public_profile']).then((value: FacebookLoginResponse) => {
      console.log("Login success", value);
      this.facebook.getCurrentProfile().then(profile => {
        console.log(profile);
      });
      this.facebook.api('me?fields=id,name,email',[]).then(async pic => {
        console.log(pic)
        /*const alert = await this.alertController.create({
          message: JSON.stringify(pic)
        })
        alert.present();*/
            //console.log(pic.name);
            //alert(pic.name);
            this.serverProcess = true;
            let facebookSession = JSON.stringify(pic);
            this.sessionService.getUserLoginWithFB(facebookSession).subscribe( resp =>{
              console.log(resp);
              setTimeout(()=>{  
                this.serverProcess = false;
                if(resp.statusID == 200){
        
                  setTimeout(()=>{  
                    this.authService.setAuth(true);
                    let autenticado = this.authService.isAuthFunction();
                    console.log("autenticado");
                    this.router.navigateByUrl('/tabs/tab1');
                  }, 500);
              
        
                  
                }else{
                  this.presentAlert(resp.statusName,resp.statusDescription);
                }
              }, 1500);
            });
    



      })
    }).catch(err => {
      console.log("Acurrio un error al intertar logearse", err)
    })





    

    
   

















    
    




    // this.authService.setAuth(true);
    // let autenticado = this.authService.isAuthFunction();
    // if(autenticado){
    //   console.log("autenticado");
    //   this.router.navigateByUrl('/tabs/tab1');
    // } else{
    //   console.log("no autenticado");
    // }
  }


  loginGuest() {

    /*this.authService.setAuth(false);
    this.router.navigateByUrl('/tabs/tab1');*/


    this.authService.setAuth(true);
    let autenticado = this.authService.isAuthFunction();
    if (autenticado) {
      console.log("autenticado");
      this.router.navigateByUrl('/tabs/tab1');
    } else {
      console.log("no autenticado");
    }
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

}
