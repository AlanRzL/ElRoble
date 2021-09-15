import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { facebookLoginResponse, ResponseProduct, UserModel, UserResponse } from '../interfaces/interfaces';
import { map } from 'rxjs/operators'

const URL = 'https://carniceriaelroble.com/app/controllers';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  postUser(user:UserModel, action:string ){
    return this.http.post<UserResponse>(
      `${URL}/service_session.php?action=${action}`, user,
      {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    ).pipe( map( resp=>{ 
        if(resp.statusID == 200){
          this.setLocalUser(resp.data[0]);
        }
       return resp;
      })
    )//pipe
  } 



  getUserLogin(loginUser:UserModel){
        return this.http.post<UserResponse>(
        `${URL}/service_session.php?action=get`, loginUser,
        {
          headers : {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }
      ).pipe( map( resp=>{
          if(resp.statusID == 200){
            this.setLocalUser(resp.data[0]);
          }
           return resp;
        })
      )//pipe
   }
 


  
   recoverPassword(email){
    return this.http.get<ResponseProduct>(`${URL}/service_recoverPassword.php?Action=send&email=${email}`);
   }


   
  /**
   * Local functions
   */
   setLocalUser(user:UserModel){
    let userArrayString = JSON.stringify( user );
    localStorage.setItem('userArray', userArrayString);
    }


    getLocalUser(){
      return JSON.parse(localStorage.getItem('userArray'));
    }


    closeLocalUser(){
      localStorage.removeItem('userArray');
    }











  getUserLoginWithFB(loginUser:any){
    console.log(loginUser);
    return this.http.post<UserResponse>(
    `${URL}/service_facebookLogin.php?`, loginUser,
    {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
  ).pipe( map( resp=>{
      if(resp.statusID == 200){
        this.setLocalUser(resp.data[0]);
      }
       return resp;
    })
  )//pipe
}


}
