import { Component, OnInit } from '@angular/core';
import { NavOption } from '../navOption';
import { FacebookLoginComponent } from '../facebook-login/facebook-login.component';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  appName: string = "NUS REVIEWS";

  navOptions: NavOption[] = [
    {
      name: "Modules",
      link: "/dashboard",
    },
    {
      name: "About",
      link: "/about",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
