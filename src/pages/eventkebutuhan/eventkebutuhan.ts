import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { CreateeventPage } from '../createevent/createevent';

/**
 * Generated class for the EventkebutuhanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-eventkebutuhan',
  templateUrl: 'eventkebutuhan.html',
})
export class EventkebutuhanPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventkebutuhanPage');
  }

  openLogistik(){
  	this.app.getRootNav().push(CreateeventPage);
  }

}
