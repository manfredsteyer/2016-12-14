import { CanDeactivateComponent } from './can-deactivate-component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

canDeactivate(component: CanDeactivateComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return component.canDeactivate();
}


}