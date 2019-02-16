import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

import { NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';
import { PesananPage } from '../pesanan/pesanan';
import { StatistikPage } from '../statistik/statistik'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  indexSelected:any = 0;

  tab1Root = HomePage;
  tab2Root = PesananPage;
  tab3Root = StatistikPage;
  tab4Root = ChatPage;
  tab5Root = ProfilePage;

  constructor(public navParams: NavParams) {
    
    this.indexSelected = this.navParams.data;
    console.log(this.indexSelected);
    
  }

  getSelectedIndex(){
    return this.indexSelected
  }
}
