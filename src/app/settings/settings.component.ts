/**
 * Created by stefan.trajkovic on 23.4.2017..
 */

import {Component} from "@angular/core";
import {User} from "../../backend/_models/user";
import {AppDataService} from "../services/app-data.service";

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: AppDataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
