import { Component, OnInit } from '@angular/core';

declare const FB:any;

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor() {
    FB.init({
      appId: '113701052652102',
      xfbml: true,
      version: 'v2.10'
    });
    FB.AppEvents.logPageView();
  }

  onFacebookLoginClick() {
    FB.login();
  }

  statusChangeCallback(res) {
    if (res.status === 'connected') {
      console.log(res);
    } else if (res.status === 'not_authorized') {
      console.log("Unauthorized");
    } else {
       console.log("Unknown Error");
    }
  };

  ngOnInit() {
    FB.getLoginStatus(res => {
      this.statusChangeCallback(res);
    });
  }

}
