import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { VenuedetailPage } from '../venuedetail/venuedetail';

/**
 * Generated class for the VenuepilihPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-venuepilih',
  templateUrl: 'venuepilih.html',
})
export class VenuepilihPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuepilihPage');
  }

  openDetail(){
    this.app.getRootNav().push(VenuedetailPage);
  }

}
