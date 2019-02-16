import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { VenuepilihPage } from '../venuepilih/venuepilih';


@Component({
  selector: 'page-venuecreate',
  templateUrl: 'venuecreate.html',
})
export class VenuecreatePage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuecreatePage');
  }

  submit(){
    this.app.getRootNav().push(VenuepilihPage);
  }

}
