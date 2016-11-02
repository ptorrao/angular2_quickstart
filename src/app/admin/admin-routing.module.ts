import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminFeature1Component } from './admin-feature1.component';
import { AdminFeature2Component } from './admin-feature2.component';

import { AuthGuard } from '../auth-guard.service';

const childRoutes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [
            AuthGuard
        ],
        children: [
            {
                path: '',
                canActivateChild: [
                    AuthGuard
                ],
                children: [
                    {
                        path: 'feature1',
                        component: AdminFeature1Component
                    },
                    {
                        path: 'feature2',
                        component: AdminFeature2Component
                    },
                    {
                        path: '',
                        component: AdminDashboardComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(childRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AdminRoutingModule { }
