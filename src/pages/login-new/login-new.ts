import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OtpverifyPage } from '../otpverify/otpverify';

/**
 * Generated class for the LoginNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-new',
  templateUrl: 'login-new.html',
})
export class LoginNewPage {

  phoneNumber : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginNewPage');
  }

  signIn(phoneNumber){
    
    this.navCtrl.push(OtpverifyPage,{
      data : phoneNumber
    });
    return 0;
  }
}
