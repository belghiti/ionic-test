import { Component } from '@angular/core';
import { NavParams, ToastController, NavController } from 'ionic-angular';
import { User } from '../../../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersPage } from '../../users';

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  private user: User;
  private form;

  constructor(public navParams: NavParams,
              public navCtrl: NavController, 
              public toastCtrl: ToastController) {

    this.form = new FormGroup({
      fullname: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      telephone: new FormControl("", Validators.required)
    });

    this.user = this.navParams.get('user');
  }

  processEditUserForm(){
    
    this.user.fullname = this.form.value.fullname;
    this.user.username = this.form.value.username;
    this.user.password = this.form.value.password;
    this.user.email = this.form.value.email;
    this.user.telephone = this.form.value.telephone;

    this.showToast('Utilisateur Modifié avec succé !');
    
    this.navCtrl.pop();

  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

}
