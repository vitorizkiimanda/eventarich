import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  indexSelected:any = 0;

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = UploadeventPage;
  tab4Root = ListPage;
  tab5Root = ListPage;

  constructor(public navParams: NavParams) {
    
    this.indexSelected = this.navParams.data;
    console.log(this.indexSelected);
    
  }

  getSelectedIndex(){
    return this.indexSelected
  }
}
