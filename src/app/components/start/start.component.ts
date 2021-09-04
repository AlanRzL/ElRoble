import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from 'src/app/interfaces/interfaces';
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

  user = new UserModel();

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private router: Router,
    private readonly facebook: Facebook,
    private readonly alert: AlertController
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
    this.facebook.login(['email','public_profile','user_link','user_photos']).then((value: FacebookLoginResponse) => {
      console.log("Login success", value);
      this.facebook.getCurrentProfile().then(profile => {
        console.log(profile);
      });
      this.facebook.api('me?fields=id,name,email,picture.width(400).height(400)',[]).then(async pic => {
        console.log(pic)
        const alert = await this.alert.create({
          message: JSON.stringify(pic)
        })
        alert.present()
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


}
