import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the StatistikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-statistik',
  templateUrl: 'statistik.html',
})
export class StatistikPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatistikPage');
  }

  showGender(){
      let alert = this.alertCtrl.create();
      alert.setTitle('Presentasi Gender');
      alert.addInput({
	      //type: 'checkbox',
	      label: 'Male  		43%',
	      //value: 'value1',
	      //checked: true
	    });

	    alert.addInput({
	      //type: 'checkbox',
	      label: 'Female		57%',
	      //value: 'value2'
	    });
        alert.addButton('Okay');
    alert.present();
  }

  showUsia(){
  let alert = this.alertCtrl.create();
      alert.setTitle('Lihat Usia');
      alert.addInput({
	      //type: 'checkbox',
	      label: 'Male  		43%',
	      //value: 'value1',
	      //checked: true
	    });

	    alert.addInput({
	      //type: 'checkbox',
	      label: 'Female		57%',
	      //value: 'value2'
	    });
        alert.addButton('Okay');
    alert.present();
  }

  showKota(){
  const alert = this.alertCtrl.create({
      title: 'Logistik',
      subTitle: 'Pesanan kamu sedang tahap proses penyampaian ke vendor',
      buttons: ['OK']
    });
    alert.present();

  }

}
