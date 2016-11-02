import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    // moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    message: string;

    constructor(
        public authService: AuthService,
        public router: Router
    ) { 
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in as ' + this.authService.username : 'out');
    }

    login() {
        this.message = 'Trying to log in...';

        this.authService.login().subscribe(() => {
            this.setMessage();

            if (this.authService.isLoggedIn) {
                console.log('Redirecting to ' + this.authService.redirectURL);        
                // Redirect to target page
                this.router.navigate([this.authService.redirectURL]);
            } else {
                // Show error message
                this.message = 'Authentication failed!';
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }

    ngOnInit() { }


}