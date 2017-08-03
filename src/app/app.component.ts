import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService,
               private menuService: MenuService) {

    const config: FrameworkConfigSettings = {
      showUserControls: true
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;

  }
}
