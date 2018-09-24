import { Component } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { NavController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { DetailUserPage } from './detail-user/detail-user';
import { EditUserPage } from './detail-user/edit-user/edit-user';
import { AddUserPage } from './add-user/add-user';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  private usersList: User[] = [];
  
  constructor(public navCtrl: NavController,
              public alerCtrl: AlertController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {

      this.usersList = UsersService.usersList;
        /* if(this.navParams.get('user') !== null)
        this.usersList.push(this.navParams.get('user'));  */
  }

  onViewUser(user: User) {
    this.navCtrl.push(DetailUserPage, { user: user });
  }

  onAddUser() {
    this.navCtrl.push(AddUserPage);
  }

  onEditUser(user: User) {
    this.navCtrl.push(EditUserPage, { user: user });
  }

  onDeleteUser(user: User) {

    let confirm = this.alerCtrl.create({
      title: 'Supprimer un utilisateur',
      message: 'Voulez vous vraiment supprimer cet utilisateur ?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            this.showToast('Action annulé');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            let users = [];
            for(let usr of this.usersList)
              if(usr !== user)
                users.push(usr);
            UsersService.usersList = users;
            this.usersList = users;
            this.showToast('Utilisateur Sipprimé avec succé !');  
            
          }
        }
      ]
    });
    confirm.present();
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }

  onLogOut(){
    this.navCtrl.push(HomePage);
  }
}
