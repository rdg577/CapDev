import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, Tab } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user: any;

  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams, 
    private data: DataProvider) {

    this.user = this.navParams.get("user");
    
    var t: any = this.navCtrl;
    t.tabIcon = "eye";
  }

  updatet(user) {
    this.data.updateStudent(user.Id, user.Firstname, user.Lastname).subscribe(
      retval => {

      },
      err => {},
      () => {}
    )
  }

  delete(user) {
    this.data.deleteStudent(user.Id).subscribe(
      retval => {
        console.log(retval)
      },
      err => {},
      () => {}
    );
  }

  ionViewDidLeave() {
    // return to root page
    // upon leaving the page
    this.navCtrl.setRoot("ContactPage");
    var t: any = this.navCtrl;
    // update the tab icon
    t.tabIcon = "contacts";
  }

}
