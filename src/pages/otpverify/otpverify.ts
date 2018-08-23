import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-otpverify',
    templateUrl: 'otpverify.html',
  })

  export class OtpverifyPage {

    phoneNumber : number;
    otp : any;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.phoneNumber = navParams.get('data');
    }
  
   

    
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
  
    verifyOtp(otp){
      this.navCtrl.push(TabsPage);
      return 0;
    }
  }
