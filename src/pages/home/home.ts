import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController, AlertController, Tabs } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, 
    private dataProvider: DataProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
    
  }

  viewDetail(user) {
    try {

      // console.log(this.navCtrl.parent);   // Tabs
      // console.log(this.navCtrl.parent.parent);   // Nav
      var t: Tabs = this.navCtrl.parent;

      t.select(2);
      t._tabs[2].setRoot("AboutPage", {user: user});
      
      console.log(t._tabs[2]);

    }catch(e) {
      this.alertCtrl.create({
        title: 'asdf',
        message: e,
        buttons: ["Ok"]
      }).present();
    }
  }

  doRefresh(refresher){    
    this.ionViewDidEnter();
    refresher.complete(); 
  }

  ionViewDidEnter() {
    let load = this.loadingCtrl.create({
      content: "Please wait while downloading data from server..."
    });

    // display loading control
    load.present();

    this.dataProvider.selectAllStudents().subscribe(
      result => {
        this.users = result;
      },
      err => {
        let alert = this.alertCtrl.create({
          title: "Cheger [Problem]",
          message: "Encountered error...please check your internet connection. " + err,
          buttons: ["Eishi [Ok]"]
        });        
        alert.present();  // display alert control

        load.dismiss(); // dismiss loading control
        
      },
      () => {
        load.dismiss(); // dismiss loading control

      }
    );

  }

}
