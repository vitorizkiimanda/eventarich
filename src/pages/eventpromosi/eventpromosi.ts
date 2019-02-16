import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { UploadeventPage } from '../uploadevent/uploadevent'

/**
 * Generated class for the EventpromosiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-eventpromosi',
  templateUrl: 'eventpromosi.html',
})
export class EventpromosiPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventpromosiPage');
  }

  submit(){
    this.app.getRootNav().push(UploadeventPage);
  }

}
