import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { AuthGuard } from './auth-guard.service';
// import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { PreloadSelectedModules } from './selective-preload-strategy';

const appRoutes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [ AuthGuard ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'feature1',
        loadChildren: 'app/feature1/feature1.module#Feature1Module',
        // data: {
        //     preload: true
        // }
    },
    {
        path: 'feature2',
        loadChildren: 'app/feature2/feature2.module#Feature2Module',
        // data: {
        //     preload: true
        // }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
        // {
        //     preloadingStrategy: PreloadSelectedModules
        // }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard,
        // PreloadSelectedModules
    ],
})
export class AppRoutingModule { }
