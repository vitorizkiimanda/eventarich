import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-event-packet-customize',
  templateUrl: 'event-packet-customize.html',
})
export class EventPacketCustomizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPacketCustomizePage');
  }

  pay(){
    this.navCtrl.push(PaymentPage);
  }

}
