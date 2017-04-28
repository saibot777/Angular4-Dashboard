import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from "../../../app/services/user.service";
import {AlertService} from "../../../backend/_services/alert.service";

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  formError: string;
  submitting = false;
  loading = false;

  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    // // reset login status
    // this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/authenticated']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
