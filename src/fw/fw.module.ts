import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import {PanelComponent} from "./panels/panel/panel.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions} from "@angular/http";
import {AlertService} from "../backend/_services/alert.service";
import {fakeBackendProvider} from "../backend/_helpers/fake-backend";
import {AlertComponent} from "../backend/_directives/alert.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    PanelComponent,
    AlertComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService,
    MockBackend,
    BaseRequestOptions,
    AlertService,
    // providers used to create fake backend
    fakeBackendProvider
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent,
    PanelComponent,
    AlertComponent,
    ScreenLarge,
    ScreenBelowLarge
  ]
})
export class FwModule { }
