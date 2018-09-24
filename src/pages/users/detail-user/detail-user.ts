import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { User } from '../../../models/user';

@Component({
  selector: 'page-detail-user',
  templateUrl: 'detail-user.html',
})
export class DetailUserPage{

  user: User;

  constructor(public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

}
