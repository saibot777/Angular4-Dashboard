import { Component} from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
import {UserService} from "../../app/services/user.service";
import {User} from "../../backend/_models/user";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  currentUser : User;

  constructor(private frameworkConfigService: FrameworkConfigService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  signOut() {
    this.userService.signOut();
  }

}
