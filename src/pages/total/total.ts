import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { TermsPage } from '../terms/terms';

import { AlertController } from 'ionic-angular';
import { EventkebutuhanPage } from '../eventkebutuhan/eventkebutuhan';

/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {
  isLog: boolean = false;  
  isPlus: boolean = false; 

  logChoosen :any = null; 

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPage');
  }

  pay(){
  	this.app.getRootNav().push(TermsPage);
  }

  toggleLog(){
    this.isLog = !this.isLog;

    if(!this.isLog) this.logChoosen = null;
  }

  togglePlus(){
  	this.isPlus = !this.isPlus;

  	if(!this.isPlus) this.logChoosen = null;
  }

  tambahKebutuhan(){
  	this.app.getRootNav().push(EventkebutuhanPage);
  }

}
