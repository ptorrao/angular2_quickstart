import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    redirectURL: string;

    username = 'anonymous';

    constructor() { }

    login(): Observable<boolean> {
        return Observable
            .of(true)
            .delay(1000)
            .do(val => this.isLoggedIn = true)
            .do(val => this.username = 'Pedro')
            .do(val => console.log(this.username + ' logged in'));
    }

    logout(): void {
        this.isLoggedIn = false;
        console.log(this.username + ' logged out')
        this.username = 'anonymous';
    }
}