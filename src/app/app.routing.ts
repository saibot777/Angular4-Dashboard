import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import {CardControlComponent} from "./card-control/card-control.component";
import {CardListComponent} from "./card-list/card-list.component";
import {CardDetailComponent} from "./card-detail/card-detail.component";

export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'card-list/:count', component: CardListComponent },
          { path: 'card-detail/:id/:operation', component: CardDetailComponent },
          { path: 'card-control', component: CardControlComponent },
          { path: 'settings', component: SettingsComponent }
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
