// import { Component } from '@angular/core';
// import { ApiProvider } from './../../providers/api/api';
// import { IonicPage, NavParams, AlertController, NavController } from 'ionic-angular';
// import firebase from 'firebase';
// import {Firebase} from '@ionic-native/firebase';

// import { OtpverifyPage } from '../otpverify/otpverify';


// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
//   public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
//   verificationId: any = '';
//   phoneNumber: any = '';
//   countryCode: any = '';
//   result: any;
//   constructor(public navCtrl: NavController,private api: ApiProvider, public navParams: NavParams, private alertCtrl: AlertController,public firebase: Firebase) {
//   }
  
//   ionViewDidLoad() {
//     this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'); 
//     console.log('ionViewDidLoad PhoneVerificationPage');
//   }

//   OtpScreen() {
//     this.countryCode = '+' + this.phoneNumber.substring(0, 2);
//     this.phoneNumber = this.phoneNumber.substring(2, 13);
//     console.log(this.countryCode, this.phoneNumber); 
//   }


//   signIn(phoneNumber: number) { //Step 2 - Pass the mobile number for verification
//     this.api.presentLoader('Sending OTP to your mobile number');
//     let number =this.phoneNumber;
//     (<any>window).FirebasePlugin.verifyPhoneNumber(number, 60, (credential) =>{
//     console.log(credential);
//     this.api.dismissLoader();
//     var verificationId = credential.verificationId;
//     this.navCtrl.push('OtpPage',{verificationid: verificationId}); //This is STEP 3 - passing verification ID to OTP Page
//     }, (error) =>{
//       //this.eer = error;
//       this.api.dismissLoader();
//       this.api.presentToast('Failed to send OTP. Try again');
//       console.error(error);
//     });
//   }
// }