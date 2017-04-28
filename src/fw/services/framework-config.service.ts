import { Injectable } from '@angular/core';

export interface FrameworkConfigSettings {
    showUserControls?: boolean
}


@Injectable()
export class FrameworkConfigService {
    showUserControls = true;

    configure(settings: FrameworkConfigSettings) : void {
        Object.assign(this, settings);
    }

}
