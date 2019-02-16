import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

  pay(){
  	this.app.getRootNav().push(PaymentPage);
  }

}
