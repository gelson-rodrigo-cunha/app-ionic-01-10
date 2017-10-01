import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   if(localStorage.getItem('userData')){
     this.navCtrl.setRoot(TabsPage);
   }

  }

  ionViewDidLoad() {
    console.log('Página inicial');
  }

  login(){
   this.navCtrl.push(Login);
  }

}
