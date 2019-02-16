import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }


  sendMsg() {
    const toast = this.toastCtrl.create({
      message: 'Pesan anda telah disampaikan',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

}
