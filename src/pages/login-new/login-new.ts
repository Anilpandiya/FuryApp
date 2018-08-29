import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OtpverifyPage } from '../otpverify/otpverify';

import * as $ from 'jquery';



@Component({
  selector: 'page-login-new',
  templateUrl: 'login-new.html',
})
export class LoginNewPage {


  otp: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.otp = Math.floor(Math.random() * Math.floor(9999));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginNewPage', this.otp);
  }

  signIn(phoneNumber: Number) {

    let otp = this.otp;

     var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://api.msg91.com/api/v2/sendsms",
      "method": "POST",
      "headers": {
        "authkey": "120364AWey9QFL5b8423c6",
        "content-type": "application/json"
      },
      "processData": false,
      "data": "{ \"sender\": \"SOCKET\", \"route\": \"4\", \"country\": \"91\", \"sms\": [ { \"message\": \"Fury App Otp : 6969\", \"to\": [ \"9672598162\"] } ] }"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      alert("Sms Sent!");
    });

    this.navCtrl.push(OtpverifyPage, {
      phoneNumber: phoneNumber,
      otp: otp
    });
    return 0;
  }


}
