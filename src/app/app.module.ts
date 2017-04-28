import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for unit-testing purposes
import {RouterTestingModule} from "@angular/router/testing";

import { FormsModule } from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRoutes } from './app.routing';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import {CardPanelComponent} from "./panels/card-panel/card-panel.component";
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CardControlComponent} from "./card-control/card-control.component";
import {SettingsComponent} from "./settings/settings.component";
import {CardDetailComponent} from "./card-detail/card-detail.component";
import {CardListComponent} from "./card-list/card-list.component";
import {MockBackend} from "@angular/http/testing";
import {AlertService} from "../backend/_services/alert.service";
import {fakeBackendProvider} from "../backend/_helpers/fake-backend";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardDetailComponent,
    CardListComponent,
    SettingsComponent,
    CardControlComponent,
    AuthenticatedUserComponent,
    CardPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterTestingModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AlertService,
    AppDataService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
