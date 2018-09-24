import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { AddUserPage } from '../pages/users/add-user/add-user';
import { DetailUserPage } from '../pages/users/detail-user/detail-user';
import { EditUserPage } from '../pages/users/detail-user/edit-user/edit-user';
import { UsersService } from '../services/users.service'
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    AddUserPage,
    DetailUserPage,
    EditUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    AddUserPage,
    DetailUserPage,
    EditUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService
  ]
})
export class AppModule {}
