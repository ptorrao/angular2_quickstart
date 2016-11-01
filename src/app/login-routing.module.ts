import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent }   from './login.component';

const childRoutes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(childRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // AuthGuard,
        // AuthService
    ],
})
export class LoginRoutingModule { }
