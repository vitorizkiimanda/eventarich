import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pesanan',
  templateUrl: 'pesanan.html',
})
export class PesananPage {

  isLog: boolean = false;  
  isCredit: boolean = false; 
  
  logChoosen :any = null;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesananPage');
  }

  toggleLog(){
    this.isLog = !this.isLog;

    // this.isBank = false;
    this.isCredit = false;

    if(!this.isLog) this.logChoosen = null;
  }

  toggleCredit(){
    this.isCredit = !this.isCredit;

    this.isLog = false;
    // this.isCredit = false;

    if(!this.isCredit) this.logChoosen = null;
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Logistik',
      subTitle: 'Pesanan kamu sedang tahap proses penyampaian ke vendor',
      buttons: ['OK']
    });
    alert.present();
  }

}
