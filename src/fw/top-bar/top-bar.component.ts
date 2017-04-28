import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
// import { UserApi } from '../users/user-api';
import {UserService} from "../../app/services/user.service";
import {User} from "../../backend/_models/user";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  currentUser : User;

  constructor(private frameworkConfigService: FrameworkConfigService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }



  ngOnInit() {
  }

  signOut() {
    this.userService.signOut();
  }

}
