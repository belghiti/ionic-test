import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private form;
  private usersList: User[];
  private isConnected: boolean;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });

    this.usersList = UsersService.usersList;
    this.isConnected = false;
  }

  processForm() {
    
    for (let user of this.usersList) {    
      if(this.form.value.username === user.username && this.form.value.password === user.password) {

        this.isConnected = true;
        this.navCtrl.push(UsersPage); 
  
        return;
      }
    } 

    this.showToast('Nom d\'utilisateur ou mot de passe incorrecte !');

  }
  
  onLogOut(){
    this.isConnected = false;
  }

  onUsersLoad(){
    this.navCtrl.push(UsersPage); 
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present(toast);
  }

}
