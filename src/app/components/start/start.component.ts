import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  user = new UserModel();

  constructor(
    private sessionService: SessionService,
    private authService:AuthService,
    private router:Router
    ){ }

  ngOnInit() {

    this.user = this.sessionService.getLocalUser();
    console.log(this.user);
    if(this.user){
      console.log("autenticado");
      this.authService.setAuth(true);
      this.router.navigateByUrl('/tabs/tab1');
    }else{
      console.log("no autenticado");
      this.authService.setAuth(false);
    }

  }







  loginFacebook(){
    this.authService.setAuth(true);
    let autenticado = this.authService.isAuthFunction();
    if(autenticado){
      console.log("autenticado");
      this.router.navigateByUrl('/tabs/tab1');
    } else{
      console.log("no autenticado");
    }
  }



  loginGuest(){
    
    /*this.authService.setAuth(false);
    this.router.navigateByUrl('/tabs/tab1');*/
    


    this.authService.setAuth(true);
    let autenticado = this.authService.isAuthFunction();
    if(autenticado){
      console.log("autenticado");
      this.router.navigateByUrl('/tabs/tab1');
    } else{
      console.log("no autenticado");
    }
  }


}
