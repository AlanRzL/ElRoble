import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { UserModel } from 'src/app/interfaces/interfaces';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


   user = new UserModel();
   loginEmail = "";
   loginPassword = "";
   recoveryEmail = "";

  serverProcess: boolean = false;
  segmentValue = "login";
  
  constructor(
    private modalCtrl: ModalController,
    private navController: NavController,
    private router:Router,
    private sessionService: SessionService,
    public loadingController: LoadingController,
    public alertController: AlertController
    ) {

    }



  ionViewWillEnter(){    
    this.user = new UserModel();
    this.user.Address = "";
    this.user.AddressCity = "";
    this.user.AddressState = "";
    this.user.Email = "";
    this.user.Name = "";
    this.user.Password = "";
    console.log(this.user.Name);
  
  } 


  ngOnInit() {
  }


  userSegmentChanged(event){
    console.log(event);
    this.segmentValue = event;
  }



  login(){
    this.serverProcess = true;
    console.log("Login");
    let loginUser = new UserModel();
    loginUser.Email = this.loginEmail
    loginUser.Password = this.loginPassword;
    console.log(loginUser);

    this.sessionService.getUserLogin(loginUser).subscribe( resp =>{
      console.log(resp);
      setTimeout(()=>{  
        this.serverProcess = false;
        if(resp.statusID == 200){
          this.closeLoginComponent("refresh");
        }else{
          this.presentAlert(resp.statusName,resp.statusDescription);
        }
      }, 1500);
    });


  }

  register(){
    this.serverProcess = true;
    this.sessionService.postUser(this.user, "create").subscribe( resp =>{
      console.log(resp);
      setTimeout(()=>{  
        this.serverProcess = false;
        if(resp.statusID == 200){
          this.closeLoginComponent("refresh");
        }else{
          this.presentAlert(resp.statusName,resp.statusDescription);
        }
      }, 1500);
    });
  }



  recovery(){ 
    this.serverProcess = true;
    this.sessionService.recoverPassword(this.recoveryEmail).subscribe( resp =>{
      console.log(resp);
      setTimeout(()=>{  
        this.serverProcess = false;
        if(resp.statusID == 200){
          this.presentAlert(resp.statusName,resp.statusDescription);
          this.recoveryEmail = "";
        }else{
          this.presentAlert(resp.statusName,resp.statusDescription);
        }
      }, 1500);
    });
  }

  closeLoginComponent(data = null){
    this.modalCtrl.dismiss(data, null, "LoginComponent");
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