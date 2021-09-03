import { Component } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import { UserModel, UserNotifications } from './interfaces/interfaces';
import { PowerManagement } from '@ionic-native/power-management/ngx';
import { NotificationsService } from './services/notifications.service';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  window = "";
  number = 1;
  user = new UserModel();

  notifications: UserNotifications [] = [];
  constructor(
    public localNotifications: LocalNotifications,
    public sessionService: SessionService,
    public backgroundMode: BackgroundMode,
    public platform: Platform,
    public powerManagement: PowerManagement,
    public notificationsService: NotificationsService
    ) 
    { 
      this.initializeApp();
    }
  
    initializeApp() {



      /*setInterval(()=>{
      this.user = this.sessionService.getLocalUser();
      if(this.user){
        this.notificationsService.getNotifications(this.user.ID_User)
        .subscribe(response => {
          this.notifications = response.data[0].Notifications;
          if(this.notifications){
            this.notifications.forEach(function(notification) {
                  console.log(notification.ID_Notification)
                  console.log(notification.Message)
                
            });
          }
        })
      }else{
        alert("Not_user");
      }
    },15000);*/




      this.platform.ready().then(() => {
        // Enable Background
        //this.backgroundMode.disable();
        this.backgroundMode.disableWebViewOptimizations();
        this.backgroundMode.disableBatteryOptimizations();
        this.powerManagement.acquire()
        .then(function() {
          //alert('powerManagement acquired');
        }
        ).catch(function() {
          //alert('Failed to powerManagement acquired');
        });
        this.powerManagement.dim()
        .then(function() {
          //alert('powerManagement dim');
        }
        ).catch(function() {
         // alert('Failed to powerManagement dim');
        });
        this.powerManagement.setReleaseOnPause(false)
        .then(function() {
          //alert('powerManagement setReleaseOnPause');
        }
        ).catch(function() {
          //alert('Failed to powerManagement setReleaseOnPause');
        });

        setInterval(()=>{
          this.backgroundMode.wakeUp();
          this.backgroundMode.moveToForeground();

          this.user = this.sessionService.getLocalUser();
          if(this.user){
            this.notificationsService.getNotifications(this.user.ID_User)
            .subscribe(response => {
              this.notifications = response.data[0].Notifications;
              if(this.notifications){

                for (let i = 0; i < this.notifications.length; i++) {
                  this.localNotifications.schedule({
                    id: this.notifications[i].ID_Notification,
                    text: this.notifications[i].Message,
                    data: { secret: 'Hello' }
                  });
                }

              }
            })
          }else{
            //alert("Not_user");
          }

          
        },10000);


      });
    }//this.initializeApp();





}
