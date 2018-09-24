import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UsersPage } from '../users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  private user: User;
  private form;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController) {
      
      this.form = new FormGroup({
        fullname: new FormControl("", Validators.required),
        username: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        telephone: new FormControl("", Validators.required)
      });
      
      this.user = new User;
  }

  processAddUserForm(){
    
    this.user.fullname = this.form.value.fullname;
    this.user.username = this.form.value.username;
    this.user.password = this.form.value.password;
    this.user.email = this.form.value.email;
    this.user.telephone = this.form.value.telephone;
   
    UsersService.usersList.push(this.user);
    this.showToast('Utilisateur Ajouté avec succé !');
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
