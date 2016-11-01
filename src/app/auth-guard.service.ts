import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    NavigationExtras,
    Route,
    Router,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(route);
        console.log('Checking Activate route ' + state.url + ' for ' + this.authService.username);
    
        let url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(route);
        console.log('Checking ActivateChild route ' + state.url + ' for ' + this.authService.username);

        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        console.log(route);
        console.log('Checking Load route ' + route.path + ' for ' + this.authService.username);

        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        console.log('Checking login for ' + url);
    
        if (this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectURL = url;

        let sessionId = 123456789;

        let navigationExtras: NavigationExtras = {
            queryParams: {
                'session_id': sessionId
            },
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);

        console.log('Access to ' + url + ' denied to ' + this.authService.username);

        return false;
    }

}