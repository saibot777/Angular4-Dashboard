import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AlertService} from "../../../backend/_services/alert.service";
import {AppDataService} from "../../../app/services/app-data.service";

@Component({
  moduleId: module.id.toString(),
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: AppDataService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

