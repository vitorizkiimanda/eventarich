import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TicketbuyPage } from '../ticketbuy/ticketbuy';

/**
 * Generated class for the VenuedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-venuedetail',
  templateUrl: 'venuedetail.html',
})
export class VenuedetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuedetailPage');
  }

  order(){
    this.navCtrl.push(TicketbuyPage);
  }

}
